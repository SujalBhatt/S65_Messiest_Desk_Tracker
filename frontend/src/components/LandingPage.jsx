import React from 'react';
import { Link } from 'react-router-dom';
import DeskItem from './DeskItem'; // Import the DeskItem component

const LandingPage = () => {
  const dummyDesk = {
    name: 'John\'s Desk',
    owner: 'John Doe',
    messinessLevel: 'High',
    description: 'Papers and books scattered everywhere.'
  };

  return (
    <div className="landing-page text-center p-12">
      <header className="header bg-green-500 p-6 rounded-lg mb-8">
        <h1 className="text-4xl font-bold mb-4 text-white">Messiest Desk Tracker</h1>
        <p className="text-lg mb-6">Track and manage the messiest desks with ease!</p>
        <Link to="/signup" className="btn bg-blue-500 text-white py-2 px-4 rounded">Get Started</Link>
      </header>
      <section className="about bg-white p-6 rounded-lg mb-8 shadow">
        <h2 className="text-3xl font-semibold mb-4">About</h2>
        <p className="text-lg mb-4">Messiest Desk Tracker is a tool designed to help you keep track of the messiest desks in your workspace. With user authentication, CRUD operations, and sorting functionality, you can easily manage and organize your personalized list of messy desks.</p>
      </section>
      <section className="how-it-works bg-gray-100 p-6 rounded-lg mb-8 shadow">
        <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside text-left mx-auto max-w-2xl">
          <li className="text-lg mb-2">Sign up and create an account.</li>
          <li className="text-lg mb-2">Log in to access your dashboard.</li>
          <li className="text-lg mb-2">Add, edit, and delete desks from your list.</li>
          <li className="text-lg mb-2">Sort desks by messiness level or other criteria.</li>
        </ol>
      </section>
      <section className="features bg-gray-200 p-6 rounded-lg mb-8 shadow">
        <h2 className="text-3xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside text-left mx-auto max-w-2xl">
          <li className="text-lg mb-2">User Authentication</li>
          <li className="text-lg mb-2">CRUD Operations</li>
          <li className="text-lg mb-2">Sorting Functionality</li>
          <li className="text-lg mb-2">Personalized List Management</li>
        </ul>
      </section>
      <section className="contact bg-white p-6 rounded-lg shadow">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-lg mb-4">Have questions or need support? Reach out to us at <a href="mailto:support@messiestdesktracker.com" className="text-blue-500">support@messiestdesktracker.com</a>.</p>
      </section>
      <section className="example-desk bg-white p-6 rounded-lg shadow">
        <h2 className="text-3xl font-semibold mb-4">Example Desk</h2>
        <DeskItem desk={dummyDesk} /> {/* Render the DeskItem component with dummy data */} 
      </section>
    </div>
  );
};

export default LandingPage;
