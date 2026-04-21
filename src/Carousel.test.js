import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Carousel from './Carousel';

// jsdom doesn't implement HTMLMediaElement.play — silence the warning from Slide3's <video>
window.HTMLMediaElement.prototype.play = () => Promise.resolve();
window.HTMLMediaElement.prototype.pause = () => {};

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

describe('Carousel — rendering', () => {
  test('renders without crashing', () => {
    render(<Carousel />);
  });

  test('renders the APEX logo', () => {
    render(<Carousel />);
    expect(screen.getByText('APEX')).toBeInTheDocument();
  });

  test('renders all navigation items', () => {
    render(<Carousel />);
    ['Athletes', 'Metrics', 'Recruitment', 'System'].forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test('renders Scout Portal button', () => {
    render(<Carousel />);
    expect(screen.getByText('Scout Portal')).toBeInTheDocument();
  });

  test('renders all four slide images', () => {
    render(<Carousel />);
    expect(screen.getByAltText('Athlete in motion')).toBeInTheDocument();
    expect(screen.getByAltText('Basketball player')).toBeInTheDocument();
    expect(screen.getByAltText('Swimmer')).toBeInTheDocument();
  });

  test('renders slide cards with unique content', () => {
    render(<Carousel />);
    expect(screen.getByText('High-Intensity Interval')).toBeInTheDocument(); // Slide 1
    expect(screen.getByText('Full Court Analysis')).toBeInTheDocument();      // Slide 2
    expect(screen.getByText('Sprint Session Alpha')).toBeInTheDocument();     // Slide 3
    expect(screen.getByText('Underwater Propulsion')).toBeInTheDocument();    // Slide 4
  });

  test('renders telemetry rows for each slide', () => {
    render(<Carousel />);
    // Slide 1
    expect(screen.getByText('HR')).toBeInTheDocument();
    expect(screen.getByText('VO2')).toBeInTheDocument();
    expect(screen.getByText('PWR')).toBeInTheDocument();
    // Slide 2
    expect(screen.getByText('SPD')).toBeInTheDocument();
    expect(screen.getByText('JMP')).toBeInTheDocument();
    expect(screen.getByText('AGL')).toBeInTheDocument();
    // Slide 4
    expect(screen.getByText('STR')).toBeInTheDocument();
    expect(screen.getByText('DRG')).toBeInTheDocument();
    expect(screen.getByText('LCT')).toBeInTheDocument();
  });

  test('renders footer system status', () => {
    render(<Carousel />);
    expect(screen.getByText('ONLINE')).toBeInTheDocument();
    expect(screen.getByText('ST-04')).toBeInTheDocument();
    expect(screen.getByText('12MS')).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// Default state
// ---------------------------------------------------------------------------

describe('Carousel — default state', () => {
  test('shows slide counter at 01 / 04', () => {
    render(<Carousel />);
    expect(screen.getByText('01 / 04')).toBeInTheDocument();
  });

  test('Athletes nav item is active by default', () => {
    render(<Carousel />);
    expect(screen.getByText('Athletes')).toHaveClass('active');
    expect(screen.getByText('Metrics')).not.toHaveClass('active');
    expect(screen.getByText('Recruitment')).not.toHaveClass('active');
    expect(screen.getByText('System')).not.toHaveClass('active');
  });

  test('first carousel dot is active by default', () => {
    const { container } = render(<Carousel />);
    const dots = container.querySelectorAll('.carousel-btn-item');
    expect(dots).toHaveLength(4);
    expect(dots[0]).toHaveClass('active');
    expect(dots[1]).not.toHaveClass('active');
  });
});

// ---------------------------------------------------------------------------
// Interactions
// ---------------------------------------------------------------------------

describe('Carousel — interactions', () => {
  test('clicking a nav item makes it the active item', () => {
    render(<Carousel />);
    userEvent.click(screen.getByText('Metrics'));
    expect(screen.getByText('Metrics')).toHaveClass('active');
    expect(screen.getByText('Athletes')).not.toHaveClass('active');
  });

  test('clicking each nav item activates only that item', () => {
    render(<Carousel />);
    const navItems = ['Athletes', 'Metrics', 'Recruitment', 'System'];
    navItems.forEach((active) => {
      userEvent.click(screen.getByText(active));
      navItems.forEach((item) => {
        if (item === active) {
          expect(screen.getByText(item)).toHaveClass('active');
        } else {
          expect(screen.getByText(item)).not.toHaveClass('active');
        }
      });
    });
  });

  test('clicking second carousel dot updates counter to 02 / 04', () => {
    const { container } = render(<Carousel />);
    const dots = container.querySelectorAll('.carousel-btn-item');
    userEvent.click(dots[1]);
    expect(screen.getByText('02 / 04')).toBeInTheDocument();
    expect(dots[1]).toHaveClass('active');
    expect(dots[0]).not.toHaveClass('active');
  });

  test('clicking third carousel dot updates counter to 03 / 04', () => {
    const { container } = render(<Carousel />);
    const dots = container.querySelectorAll('.carousel-btn-item');
    userEvent.click(dots[2]);
    expect(screen.getByText('03 / 04')).toBeInTheDocument();
  });

  test('clicking last carousel dot updates counter to 04 / 04', () => {
    const { container } = render(<Carousel />);
    const dots = container.querySelectorAll('.carousel-btn-item');
    userEvent.click(dots[3]);
    expect(screen.getByText('04 / 04')).toBeInTheDocument();
  });

  test('clicking a dot and then another updates to the latest slide', () => {
    const { container } = render(<Carousel />);
    const dots = container.querySelectorAll('.carousel-btn-item');
    userEvent.click(dots[2]);
    userEvent.click(dots[0]);
    expect(screen.getByText('01 / 04')).toBeInTheDocument();
    expect(dots[0]).toHaveClass('active');
    expect(dots[2]).not.toHaveClass('active');
  });
});
