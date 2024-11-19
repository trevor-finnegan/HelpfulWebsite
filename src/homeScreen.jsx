import React from 'react';

function HomePage() {
  return (
    <div style={styles.container}>
      
      <header style={styles.header}>
        <img src="logo.png" alt="Wake Forest University" style={styles.logo} />
        <nav style={styles.nav}>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#projects" style={styles.navLink}>Projects</a>
          <a href="#tutorials" style={styles.navLink}>Tutorials</a>
          <a href="#news" style={styles.navLink}>News</a>
        </nav>
      </header>
      
      
      <main style={styles.main}>
        <div style={styles.imageContainer}>
          <img src="circuit_board.jpg" alt="Circuit board" style={styles.image} />
        </div>
        
        <div style={styles.textContainer}>
          <h1 style={styles.title}>
            Welcome to <br /> WFU Club <span style={styles.highlight}>Robotics</span>
          </h1>
          <p style={styles.description}>
            Welcome to the Wake Forest Robotics Club! Founded in 2020, we’re a student-led group that welcomes all skill levels to engage in exciting robotics projects. As we gear up for the Fifteenth competition in January 2024, we invite you to join us—just bring your enthusiasm to learn!
          </p>
          <div style={styles.buttons}>
            <button style={styles.joinButton}>Join us Mondays at 6pm in Manchester</button>
            <button style={styles.updateButton}>Get email updates</button>
          </div>
        </div>
      </main>
      
      {/* Quick Links */}
      <section style={styles.quickLinksSection}>
        <h2 style={styles.quickLinksTitle}>Quick Links</h2>
        <ul style={styles.quickLinksList}>
          <li><a href="#email" style={styles.quickLink}>Get Email Updates</a></li>
          <li><a href="#groupme" style={styles.quickLink}>Join our club GroupMe</a></li>
        </ul>
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #ddd'
  },
  logo: {
    height: '40px',
  },
  nav: {
    display: 'flex',
    gap: '20px'
  },
  navLink: {
    color: '#333',
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '30px'
  },
  imageContainer: {
    flex: 1
  },
  image: {
    width: '100%',
    borderRadius: '8px'
  },
  textContainer: {
    flex: 1,
    padding: '20px'
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    lineHeight: '1.2'
  },
  highlight: {
    backgroundColor: '#f5deb3',
  },
  description: {
    fontSize: '16px',
    color: '#666',
    marginTop: '10px'
  },
  buttons: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px'
  },
  joinButton: {
    padding: '10px 20px',
    backgroundColor: 'transparent',
    border: '1px solid #333',
    cursor: 'pointer'
  },
  updateButton: {
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
  },
  quickLinksSection: {
    marginTop: '40px',
    textAlign: 'center'
  },
  quickLinksTitle: {
    fontSize: '24px',
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  quickLinksList: {
    listStyleType: 'none',
    padding: 0
  },
  quickLink: {
    color: '#666',
    textDecoration: 'none',
    fontSize: '16px'
  }
};

export default HomePage;



