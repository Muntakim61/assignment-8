const Footer = () => {
  return (
    <div className="bg-white m-0 p-0 w-full">
      <div className="w-10/12 mx-auto text-center pt-24 mb-16">
        <h2 className="text-2xl font-bold mb-3">Gadget Heaven</h2>
        <p>Leading the way in cutting-edge technology and Innovation</p>
      </div>
      <div className="w-10/12 mx-auto mb-28">
        <footer className="footer flex justify-between">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping and delivery</a>
            <a className="link link-hover">Returns</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of Services</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
