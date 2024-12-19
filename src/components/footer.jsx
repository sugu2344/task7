const Footer = () => {
  const CurrentYear = new Date().getFullYear();
  return (
    <div className="text-center py-4 bg-[#8CFF98] fixed bottom-0 left-0 w-full">
      <p>&copy;{CurrentYear} @ MovieSearch-App. All rights reserved</p>
    </div>
  );
};

export default Footer;
