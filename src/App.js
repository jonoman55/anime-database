import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => (
    <div>
        <Header />
        <div className="content-wrap">
            <Sidebar />
            <MainContent />
        </div>
    </div>
);

export default App;