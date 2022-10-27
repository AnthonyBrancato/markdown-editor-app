import { Routes, Route } from 'react-router-dom';

import './App.css';
import { MarkdownView } from 'pages/MarkdownView/MarkdownView';
import { NotFoundView } from 'pages/NotFoundView/NotFoundView';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<MarkdownView />} />
          <Route path="*" element={<NotFoundView />} />
      </Routes>
    </div>
  );
}

export default App;
