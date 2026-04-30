const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '10px', marginTop: '10px'}}>
        <hr></hr>
        <p>&copy; {new Date().getFullYear()} mrallfredii. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;