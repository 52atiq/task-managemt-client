import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuItems = <>
    <li> <Link to='/todo'>To-Do</Link> </li>
    <li> <Link to='/completedtask'>Completed Task </Link> </li>
    <li> <Link to='/calendar'>Calendar </Link> </li>
  </>
    return (
        <div class="navbar  bg-neutral">
        {/* <div class="navbar bg-base-100 bg-neutral"> */}
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-white rounded w-42">
              {menuItems}
            </ul>
          </div>
          <Link to='/' class="btn btn-ghost  text-xl text-white uppercase ">Task Management</Link>
        </div>
        <div class="navbar-right hidden lg:flex bg-neutral">
          <ul class="menu menu-horizontal text-white uppercase p-0">
            {menuItems}
          </ul>
        </div>
     
      </div>
    );
};

export default Navbar;