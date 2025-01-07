export const features = [
    {
        id: 1,
        title: 'A command line interface tool',
        description: 'for guided reflections and journaling',
        includeScript: true,
        script: "npm install -g rflect",
        terminal: [
            {
                command: 'npm install -g rflect',
                outputHTML: `
                    <div class="install-output">
                        <p>installed <strong>56 packages</strong> for rflect, including:</p>
                        <ul>
                            <li>calendar.js</li>
                            <li>date-fns</li>
                            <li>chalk</li>
                            <li>commander.js</li>
                            <li>inquirer</li>
                        </ul>
                    </div>
                `
            },
            {
                command: 'rflect',
                outputHTML: `
                    <div class="terminal-output--item">
                        <p>A CLI tool for guided reflections and journaling.</p>
                        <div class="commands-section">
                            <strong>COMMANDS:</strong>
                            <div class="command-item">
                                <span class="command-name">write</span>
                                <span class="command-description">Start a reflection with a thoughtfully curated prompt</span>
                            </div>
                            <div class="command-item">
                                <span class="command-name">show [options]</span>
                                <span class="command-description">Browse and revisit your past reflections</span>
                            </div>
                            <div class="command-item">
                                <span class="command-name">prompts [options]</span>
                                <span class="command-description">Browse available writing prompts</span>
                            </div>
                            <div class="command-item">
                                <span class="command-name">tags [options]</span>
                                <span class="command-description">Discover themes in your reflection journey</span>
                            </div>
                            <div class="command-item">
                                <span class="command-name">moods [options]</span>
                                <span class="command-description">Track your emotional journey through writing</span>
                            </div>
                            <div class="command-item">
                                <span class="command-name">init</span>
                                <span class="command-description">Set up your rflect account with initial preferences</span>
                            </div>
                            <div class="command-item">
                                <span class="command-name">config [options]</span>
                                <span class="command-description">Customize your reflection preferences</span>
                            </div>
                            <div class="command-item">
                                <span class="command-name">stats [options]</span>
                                <span class="command-description">View insights about your writing journey</span>
                            </div>
                            <div class="command-item">
                                <span class="command-name">delete [options]</span>
                                <span class="command-description">Manage your reflection history</span>
                            </div>
                            <div class="command-item">
                                <span class="command-name">upcoming</span>
                                <span class="command-description">Peek at future rflect features</span>
                            </div>
                            <div class="command-item">
                                <span class="command-name">help [command]</span>
                                <span class="command-description">Display help for command</span>
                            </div>
                        </div>
                    </div>
                `
            }
        ],
    },
    {
        id: 2,
        title: 'Pre-defined prompts',
        description: 'Thought-provoking questions to guide your thoughts',
        includeScript: false,
    },
    {
        id: 3,
        title: 'Writing patterns',
        description: 'See your stats over time',
        includeScript: true,
        script: "rflect stats --all",
    },
]