import StatusBar from './StatusBar';
import Title from './Title';

function Header() {
  return (
    <header>
      <div className="container header-inner">
        <Title>rflect</Title>
        <StatusBar />
      </div>
    </header>
  );
}

export default Header;
