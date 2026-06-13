import InputControls from './InputControls.jsx';
import RecognitionControls from './RecognitionControls.jsx';
import RecognitionReview from './RecognitionReview.jsx';
import SymbolPalette from './SymbolPalette.jsx';
import ProjectControls from './ProjectControls.jsx';

export default function Sidebar({ input, recognition, review, palette, project }) {
  return (
    <aside>
      <InputControls {...input} />
      <RecognitionControls {...recognition} />
      <RecognitionReview {...review} />
      <SymbolPalette {...palette} />
      <ProjectControls {...project} />
    </aside>
  );
}
