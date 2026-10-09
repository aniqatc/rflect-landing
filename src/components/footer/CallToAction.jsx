import { ScriptButton } from '../extras';

function CallToAction() {
  return (
    <section className="container call-to-action">
      <h2 className="call-to-action--title">
        Start your first <em>reflection.</em>
      </h2>
      <p className="call-to-action--description">
        Free on npm. One command to install.
      </p>
      <ScriptButton className="script-button--large">
        npm install -g rflect
      </ScriptButton>
      <div className="call-to-action--links">
        <a
          href="https://github.com/aniqatc/rflect-cli"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source on GitHub
        </a>
        <a
          href="https://www.npmjs.com/package/rflect"
          target="_blank"
          rel="noopener noreferrer"
        >
          npm package
        </a>
      </div>
    </section>
  );
}

export default CallToAction;
