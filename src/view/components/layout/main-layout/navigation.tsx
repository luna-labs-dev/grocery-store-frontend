import { Link } from '@tanstack/react-router';

export const Navigation = () => {
  return (
    <div>
      <ul className="flex flex-row gap-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login Page</Link>
        </li>
      </ul>
    </div>
  );
};
