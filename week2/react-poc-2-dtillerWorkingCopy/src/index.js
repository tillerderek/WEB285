import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const mainNav = [
  { linkText: 'Google', url: 'https://google.com' },
  { linkText: 'Duck Duck Go', url: 'https://duckduckgo.com' },
  { linkText: 'Ecosia', url: 'https://ecosia.com' },
];

function PageHeader({ h1msg, pmsg }) {
  return (
    <header>
      <h1>{h1msg}</h1>
      <p>{pmsg}</p>
    </header>
  );
}

function MainNavBar({ nav }) {
  return (
    <nav>
      <ul>
        {nav.map((itm) => (
          <li>
            <a href={itm.url}>{itm.linkText}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function NormalContent() {
  return <p>Sorry - no specials.</p>;
}

function PromoContent() {
  return <p className="specials">We are currently running specials!</p>;
}

function MainContent({ promo }) {
  return promo ? <PromoContent /> : <NormalContent />;
}

ReactDOM.render(
  <>
    <PageHeader h1msg="My Web Site" pmsg="We Do Good Things" />
    <MainNavBar nav={mainNav} />
    <MainContent promo={false} />
  </>,
  document.getElementById('root')
);
