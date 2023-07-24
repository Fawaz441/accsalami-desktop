// assets
import { LoginOutlined, ProfileOutlined, BookOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  BookOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'create',
  title: 'Create',
  type: 'group',
  children: [
    {
      id: 'expenses1',
      title: 'Expense',
      type: 'item',
      url: '/login',
      icon: icons.BookOutlined,
      target: true
    },
    {
      id: 'login1',
      title: 'Login',
      type: 'item',
      url: '/login',
      icon: icons.LoginOutlined,
      target: true
    },
    {
      id: 'register1',
      title: 'Register',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: true
    }
  ]
};

export default pages;
