import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from './Content';
import Store from './Store';

const App = () => {
    return (
        <>
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<Content />} />
                        <Route path="/store" element={<Store />} />
                    </Routes>
                </Router>
            </div>
        </>
    );
};
export default App;
