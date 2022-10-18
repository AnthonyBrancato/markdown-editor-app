import { Routes, Route } from 'react-router-dom';

import './App.css';
import { MarkdownView } from 'pages/MarkdownView/MarkdownView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path="markdown-view" element={<MarkdownView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
