const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} A-tek. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Ghazir, Lebanon
        </p>
      </div>
    </footer>
  );
};

export default Footer;
