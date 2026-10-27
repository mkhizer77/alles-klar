import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { useAuth } from './lib/auth';
import { useStoreValue } from './lib/store';
import { keys, DEFAULT_SETTINGS, type Settings } from './lib/models';
import Layout from './components/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import Learn from './pages/Learn';
import TopicPage from './pages/TopicPage';
import Practice from './pages/Practice';
import Concepts from './pages/Concepts';
import Vocab from './pages/Vocab';
import VocabSession from './pages/VocabSession';
import Tests from './pages/Tests';
import TestRun from './pages/TestRun';
import SettingsPage from './pages/Settings';
import Reading from './pages/Reading';
import Listening from './pages/Listening';
import Writing from './pages/Writing';
import { setSpeechRate } from './lib/tts';

function useTheme() {
  const settings = useStoreValue<Partial<Settings>>(keys.settings, DEFAULT_SETTINGS);
  const theme = settings.theme ?? 'system';
  useEffect(() => {
    setSpeechRate(settings.speechRate ?? DEFAULT_SETTINGS.speechRate);
  }, [settings.speechRate]);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => {
      const dark = theme === 'dark' || (theme === 'system' && mq.matches);
      document.documentElement.classList.toggle('dark', dark);
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#1c1f26' : '#2457a6');
    };
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, [theme]);
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

export default function App() {
  useTheme();
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-dvh grid place-items-center text-muted">
        <div className="animate-pulse">Loading …</div>
      </div>
    );
  }
  if (!user) return <Login />;

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:level" element={<Learn />} />
        <Route path="/topic/:id" element={<TopicPage />} />
        <Route path="/practice/:id" element={<Practice />} />
        <Route path="/reading/:id" element={<Reading />} />
        <Route path="/listen/:level/:unit" element={<Listening />} />
        <Route path="/writing/:id" element={<Writing />} />
        <Route path="/concepts" element={<Concepts />} />
        <Route path="/vocab" element={<Vocab />} />
        <Route path="/vocab/session" element={<VocabSession />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/tests/:level" element={<TestRun />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
