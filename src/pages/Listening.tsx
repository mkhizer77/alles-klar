import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router';
import type { Level } from '../content/types';
import { levelOf } from '../content';
import { buildListeningSet, listeningAvailable } from '../lib/listening';
import { ExerciseSession } from '../components/ExerciseSession';
import { keys } from '../lib/models';

const SET_SIZE = 10;

export default function Listening() {
  const { level: lvlParam = '', unit: unitParam = '' } = useParams();
  const level = lvlParam.toUpperCase() as Level;
  const unit = Number(unitParam);
  const valid = ['A1', 'A2', 'B1'].includes(level) && levelOf(level).units.some((u) => u.unit === unit) && listeningAvailable(level, unit) > 0;
  const set = useMemo(() => (valid ? buildListeningSet(level, unit, SET_SIZE) : []), [level, unit, valid]);
  if (!valid) return <Navigate to="/learn" replace />;
  const u = levelOf(level).units.find((x) => x.unit === unit)!;
  return (
    <ExerciseSession
      key={`${level}-${unit}`}
      title={`Listening: Unit ${unit} · ${u.title}`}
      level={level}
      exercises={set}
      progressKey={keys.listening(level, unit)}
      exitTo={`/learn/${level}`}
      doneTo={`/learn/${level}`}
      doneLabel="Back to course"
      intro={
        <span>
          You will hear {SET_SIZE} sentences from this unit, read by your device's German voice. Type each one exactly. Punctuation and capital letters do not count; umlauts do. Use <b>Slow</b> if a sentence is fast. Each session picks different sentences.
        </span>
      }
    />
  );
}
