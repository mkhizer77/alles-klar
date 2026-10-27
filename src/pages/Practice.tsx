import { Navigate, useParams } from 'react-router';
import { topics, orderedTopicIds } from '../content';
import { ExerciseSession } from '../components/ExerciseSession';
import { keys } from '../lib/models';

export default function Practice() {
  const { id = '' } = useParams();
  const topic = topics[id];
  if (!topic) return <Navigate to="/learn" replace />;
  const idx = orderedTopicIds.indexOf(topic.id);
  const nextId = orderedTopicIds.slice(idx + 1).find((i) => topics[i]);
  return (
    <ExerciseSession
      key={topic.id}
      title={topic.title}
      level={topic.level}
      exercises={topic.exercises}
      progressKey={keys.topic(topic.id)}
      exitTo={`/topic/${topic.id}`}
      doneTo={nextId ? `/topic/${nextId}` : `/learn/${topic.level}`}
      doneLabel={nextId ? 'Next topic' : 'Back to course'}
    />
  );
}
