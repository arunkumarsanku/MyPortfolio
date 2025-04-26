import { render, screen } from '@testing-library/react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Technologies from '../Components/Technologies';
import Experience  from '../Components/Experience';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import App from '../App';
import { test, expect } from '@jest/globals';


test('renders the App component without errors', () => {
  render(<App />);
});

test('renders Navbar component', () => {
  render(<Navbar />);
  const navbarElement = screen.getByRole('navigation');
  expect(navbarElement).toBeInTheDocument();
});

test('renders Hero component', () => {
  render(<Hero />);
  const heroElement = screen.getByTestId('hero');
  expect(heroElement).toBeInTheDocument();
});

test('renders About component', () => {
  render(<About />);
  screen.debug();  // This will log the rendered HTML to the console
  const aboutElement = screen.getByTestId('about');
  expect(aboutElement).toBeInTheDocument();
});


test('renders Technologies component', () => {
  render(<Technologies />);
  const technologiesElement = screen.getByTestId('technologies');
  expect(technologiesElement).toBeInTheDocument();
});

test('renders Experience  component', () => {
  render(<Experience  />);
  const ExperienceElement = screen.getByTestId('Experience');
  expect(ExperienceElement).toBeInTheDocument();
});

test('renders Projects component', () => {
  render(<Projects />);
  const projectsElement = screen.getByTestId('projects');
  expect(projectsElement).toBeInTheDocument();
});

test('renders Contact component', () => {
  render(<Contact />);
  const contactElement = screen.getByTestId('contact');
  expect(contactElement).toBeInTheDocument();
});