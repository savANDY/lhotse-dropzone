import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {alertService, AlertType} from "../../services/alert.service";
import {Alert, Container} from "reactstrap";

const propTypes = {
  id: PropTypes.string,
  fade: PropTypes.bool
};

const defaultProps = {
  id: 'default-alert',
  fade: true
};

function AlertLhotse({id, fade}) {
  const history = useHistory();
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const subscription = alertService.onAlert(id)
    .subscribe(alert => {
      if (!alert.message) {
        setAlerts(alerts => {
          const filteredAlerts = alerts.filter(x => x.keepAfterRouteChange);

          filteredAlerts.forEach(x => delete x.keepAfterRouteChange);
          return filteredAlerts;
        });
      } else {
        setAlerts(alerts => ([...alerts, alert]));

        if (alert.autoClose) {
          setTimeout(() => removeAlert(alert), 3000);
        }
      }
    });

    const historyUnlisten = history.listen(() => {
      alertService.clear(id);
    });

    return () => {
      subscription.unsubscribe();
      historyUnlisten();
    };
  }, []);

  function removeAlert(alert) {
    if (fade) {
      const alertWithFade = {...alert, fade: true};
      setAlerts(alerts => alerts.map(x => x === alert ? alertWithFade : x));

      setTimeout(() => {
        setAlerts(alerts => alerts.filter(x => x !== alertWithFade));
      }, 250);
    } else {
      setAlerts(alerts => alerts.filter(x => x !== alert));
    }
  }

  function color(alert) {
    if (!alert) {
      return;
    }

    const classes = [];

    const alertTypeClass = {
      [AlertType.Success]: 'success',
      [AlertType.Error]: 'danger',
      [AlertType.Info]: 'info',
      [AlertType.Warning]: 'warning'
    }

    classes.push(alertTypeClass[alert.type]);

    if (alert.fade) {
      classes.push('fade');
    }

    return classes.join(' ');
  }

  if (!alerts.length) {
    return null;
  }

  return (
      <Container>
        {alerts.map((alert, index) =>
            <Alert key={index} color={color(alert)} isOpen={true}
                   toggle={() => removeAlert(alert)}>
              {alert.message}
            </Alert>
        )}
      </Container>
  );
}

AlertLhotse.propTypes = propTypes;
AlertLhotse.defaultProps = defaultProps;
export {AlertLhotse};
