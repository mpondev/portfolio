import { useContext } from 'react';
import { ThemeContext } from '../../context';
import Sun from '../../img/sun.jpg';
import Moon from '../../img/moon.png';
import './toggle.css';

function Toggle() {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' });
  };

  return (
    <div className="toggle">
      <img src={Sun} alt="Sun" className="toggle-icon" />
      <img src={Moon} alt="Moon" className="toggle-icon" />
      <div
        className="toggle-btn"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
}

export default Toggle;
