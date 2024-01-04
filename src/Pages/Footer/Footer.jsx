const Footer = () => {
  return (
    <div className="bg-zinc-900 ">
      <div className="max-w-7xl mx-auto pt-16 ">
        <footer className="footer p-10 ">
          <aside className="space-y-4">
            <h1 className="text-4xl font-bold text-white">CareerHub</h1>
            <p className="text-gray-300 leading-6">
              There are many variations of passages <br /> of Lorem Ipsum , but
              the majority have <br /> suffered alteration in some form.
            </p>
            <div className="grid grid-flow-col gap-4 text-white">
              <a href="">
                <img src={`https://i.imgur.com/NeujdUr.png`} alt="" />
              </a>
            </div>
          </aside>
          <nav className="space-y-2">
            <header className="footer-title text-white">Company</header>

            <a className="link link-hover text-gray-300">About Us</a>
            <a className="link link-hover text-gray-300">Work</a>
            <a className="link link-hover text-gray-300">Latest News</a>
            <a className="link link-hover text-gray-300">Careers</a>
          </nav>
          <nav className="space-y-2">
            <header className="footer-title text-white">Product</header>
            <a className="link link-hover text-gray-300">Prototype</a>
            <a className="link link-hover text-gray-300">Plans & Pricing</a>
            <a className="link link-hover text-gray-300">Customers</a>
            <a className="link link-hover text-gray-300">Integrations</a>
          </nav>
          <nav className="space-y-2">
            <header className="footer-title text-white">Support</header>
            <a className="link link-hover text-gray-300">Help Desk</a>
            <a className="link link-hover text-gray-300">Sales</a>
            <a className="link link-hover text-gray-300">Become a Partner</a>
            <a className="link link-hover text-gray-300">Developers</a>
          </nav>
          <nav className="space-y-2">
            <header className="footer-title text-white">Contact</header>

            <a className="link link-hover text-gray-300">524 Broadway , NYC</a>
            <a className="link link-hover text-gray-300">+1 777 - 978 - 5570</a>
          </nav>
        </footer>
        <footer className="footer px-10 pt-8 pb-16 border-t  border-gray-500">
          <aside className="items-center grid-flow-col text-gray-500">
            <p>@2023 <span span className="footer-title">CareerHub</span>. All Rights Reserved</p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4 text-gray-500">
              <p>Powered by <span className="footer-title">CareerHub</span></p>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
