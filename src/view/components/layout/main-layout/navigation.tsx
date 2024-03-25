import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <ul className="flex flex-row gap-2">
        <li>
          <Link to={'/login'}>Login</Link>
        </li>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
      </ul>
    </div>
  );
};
