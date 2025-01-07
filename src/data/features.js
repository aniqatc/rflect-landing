export const features = [
  {
    id: 1,
    title: 'A command line interface tool',
    description: 'for guided reflections and journaling',
    includeScript: true,
    script: 'npm install -g rflect',
    terminal: [
      {
        command: 'npm install -g rflect',
        outputHTML: `
          <div class="terminal-output--item">
            <p class="message">installed <strong><span class="number">56</span> packages</strong> for rflect, including:</p>
            <ul>
              <li class="command">calendar.js</li>
              <li class="command">date-fns</li>
              <li class="command">chalk</li>
              <li class="command">commander.js</li>
              <li class="command">inquirer</li>
            </ul>
          </div>`,
      },
      {
        command: 'rflect',
        outputHTML: `
          <div class="terminal-output--item">
            <p class="message">A CLI tool for guided reflections and journaling.</p>
            <div class="commands-section">
              <strong class="command-header">COMMANDS:</strong>
              <div class="command-item">
                <span class="command">write</span>
                <span class="description">Start a reflection with a thoughtfully curated prompt</span>
              </div>
              <div class="command-item">
                <span class="command">show [options]</span>
                <span class="description">Browse and revisit your past reflections</span>
              </div>
              <div class="command-item">
                <span class="command">prompts [options]</span>
                <span class="description">Browse available writing prompts</span>
              </div>
              <div class="command-item">
                <span class="command">tags [options]</span>
                <span class="description">Discover themes in your reflection journey</span>
              </div>
              <div class="command-item">
                <span class="command">moods [options]</span>
                <span class="description">Track your emotional journey through writing</span>
              </div>
              <div class="command-item">
                <span class="command">init</span>
                <span class="description">Set up your rflect account with initial preferences</span>
              </div>
              <div class="command-item">
                <span class="command">config [options]</span>
                <span class="description">Customize your reflection preferences</span>
              </div>
              <div class="command-item">
                <span class="command">stats [options]</span>
                <span class="description">View insights about your writing journey</span>
              </div>
              <div class="command-item">
                <span class="command">delete [options]</span>
                <span class="description">Manage your reflection history</span>
              </div>
              <div class="command-item">
                <span class="command">upcoming</span>
                <span class="description">Peek at future rflect features</span>
              </div>
              <div class="command-item">
                <span class="command">help [command]</span>
                <span class="description">Display help for command</span>
              </div>
            </div>
          </div>`,
      },
    ],
  },
  {
    id: 2,
    title: 'Start your reflection',
    description: 'Write with thoughtfully curated prompts',
    includeScript: true,
    script: 'rflect write',
    terminal: [
      {
        command: 'rflect write',
        outputHTML: `
        <div class="terminal-output--item">
          <div class="writing-session">
            <div class="prompt-item message">How are you feeling today?</div>
            <div class="input"><span class="emoji">😌</span> peaceful</div>
          </div>
        </div>`,
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
          <div class="writing-session">
            <div class="prompt-item message">What made you feel most alive today?</div>
            <div class="input">[Writing your reflection...]</div>
          </div>
        </div>`,
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
          <div class="writing-session">
            <div class="prompt-item message">Add tags (comma-separated) [optional]:</div>
            <div class="input">gratitude, mindfulness, nature</div>
          </div>
        </div>`,
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
            <div class="success-section">
              <p class="message">✨ Your reflection has been saved!</p>
              <p>Word Count: <span class="number">250</span></p>
              <p>Time Spent Writing: <span class="number">15</span>m</p>
              <p>🔥 <span class="number">3</span> day streak! Keep it up!</p>
            </div>
        </div>`,
      },
    ],
  },
  {
    id: 3,
    title: 'Initialize your account',
    description: 'Set personal goals',
    includeScript: true,
    script: 'rflect init',
    terminal: [
      {
        command: 'rflect init',
        outputHTML: `
        <div class="terminal-output--item">
          <p class="message">Welcome to rflect!</p>
          <div class="setup-section">
            <div class="prompt-item message">What should I call you?</div>
            <div class="input">Jane</div>
          </div>
        </div>
      `,
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
          <div class="setup-section">
            <div class="prompt-item message">Would you like to set writing goals?</div>
            <div class="input">Yes</div>
          </div>
          
      `,
      },
      {
        command: '',
        outputHTML: `
                   <div class="terminal-output--item">
          <div class="setup-section">
            <div class="prompt-item message">How often would you like to write with rflect?</div>
            <div class="input">Daily entries</div>
          </div>
</div>
`
      },
      {
        command: '',
        outputHTML: `
                   <div class="terminal-output--item">
          <div class="setup-section">
          <div class="prompt-item message">How many entries would you like to write daily?</div>
            <div class="input"><span class="number">1</span></div>
          </div>
</div>
`
      },
      {
        command: '',
        outputHTML: `
                   <div class="terminal-output--item">
          <div class="setup-section">
            <div class="prompt-item message">How often would you like to track your word count?</div>
            <div class="input">Weekly</div>
          </div>
</div>
`
      },
      {
        command: '',
        outputHTML: `
                   <div class="terminal-output--item">
          <div class="setup-section">
            <div class="prompt-item message">How many words would you like to write weekly?</div>
            <div class="input"><span class="number">2000</span></div>
          </div>
</div>
`
      },
      {
        command: '',
        outputHTML: `
                  <div class="success-message">
            <p class="message">✨ Welcome, <span class="command">Alex</span>!</p>
            <p class="message">You will be writing in basic text inputs with rflect.</p>
            <p class="message">Your goals:</p>
            <ul>
              <li>Write <span class="number">1</span> entry daily</li>
              <li>Write <span class="number">2000</span> words weekly</li>
            </ul>
          </div>`
      },
      {
        command: '',
        outputHTML: `<p class="message">Get started with:</p>
            <ul>
              <li><span class="command">rflect write</span> - Start your first reflection</li>
              <li><span class="command">rflect show</span> - View your entries</li>
              <li><span class="command">rflect stats</span> - Track your progress</li>
            </ul>`
      }
    ],
  },
  {
    id: 4,
    title: 'Pre-defined prompts',
    description: 'Thought-provoking questions to guide your thoughts',
    includeScript: true,
    script: 'rflect prompts --all',
    terminal: [
      {
        command: 'rflect prompts --all',
        outputHTML: `
        <div class="terminal-output--item">
          <h3 class="message">All Available Prompts</h3>
          <div class="prompts-list">
            <div class="prompt-item">
              <span class="number">1</span>. What made you feel most alive today?
            </div>
          </div>
        </div>
      `,
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
          <div class="prompts-list">
            <div class="prompt-item">
              <span class="number">2</span>. What's something you're looking forward to, and why?
            </div>
          </div>
        </div>
      `,
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
          <div class="prompts-list">
            <div class="prompt-item">
              <span class="number">3</span>. What's a challenge you faced today and how did you handle it?
            </div>
          </div>
        </div>
      `,
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
          <div class="prompts-list">
            <div class="prompt-item">
              <span class="number">4</span>. Maya Angelou said <span class="description">"There is no greater agony than bearing an untold story inside you."</span> What's a story you need to tell?
            </div>
          </div>
        </div>
      `,
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
          <div class="prompts-list">
            <div class="prompt-item">
              <span class="number">5</span>. Name three small things that brought you joy today.
            </div>
          </div>
        </div>
      `,
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
          <div class="prompts-list">
            <div class="prompt-item">
              <span class="number">6</span>. How are you different from who you were six months ago?
            </div>
          </div>
        </div>
      `,
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
          <div class="prompts-list">
            <div class="prompt-item">
              <span class="number">7</span>. What skill are you currently developing?
            </div>
          </div>
        </div>
      `,
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
          <div class="prompts-list">
            <div class="prompt-item">
              <span class="number">8</span>. Reflect on a friendship that has enriched your life.
            </div>
          </div>
        </div>
      `,
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
          <div class="prompts-list">
            <div class="prompt-item">
              <span class="number">9</span>. What comfort do you have today that you didn't have a year ago?
            </div>
          </div>
        </div>
      `,
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
          <div class="prompts-list">
            <div class="prompt-item">
              <span class="number">10</span>. Virginia Woolf wrote, <span class="description">'Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.'</span> What does mental freedom mean to you?
            </div>
          </div>
        </div>
      `,
      },
      {
        command: '',
        outputHTML: `<div class="more-content">[...more prompts available]</div>`
      },
      {
        command: '',
        outputHTML:  `<p class="message">Use <span class="command">rflect write</span> to get a random prompt and start your reflection.</p>`
      }
    ],
  },
  {
    id: 5,
    title: 'Writing patterns',
    description: 'See your stats over time',
    includeScript: true,
    script: 'rflect stats --all',
    terminal: [
      {
        command: 'rflect stats --all',
        outputHTML: `
        <div class="terminal-output--item">
          <h3 class="message">Entry Statistics</h3>
          <div class="stats-section">
            <div class="stat-item">
              Account Created: <span class="date">Jan <span class="number">07</span>, <span class="number">2025</span></span>
            </div>
            <div class="stat-item">
              Total Entries Written: <span class="number">15</span>
            </div>
            <div class="stat-item">
              Total Words Written: <span class="number">3,750</span>
            </div>
            <div class="stat-item">
              Average Words per Entry: <span class="number">250</span>
            </div>
            <div class="stat-item">
              Latest Entry: <span class="date">Jan <span class="number">07</span>, <span class="number">2025</span></span>
            </div>
          </div>
        </div>
      `,
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
            <h3 class="message">Writing Streak</h3>
          <div class="stats-section">
            <div class="stat-item">
              Current Streak: <span class="number">5</span> days
            </div>
            <div class="stat-item">
              Longest Streak: <span class="number">7</span> days
            </div>
          </div>
        </div>
      `,
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
            <h3 class="message">Time Statistics</h3>
          <div class="stats-section">
            <div class="stat-item">
              Days Since Creation: <span class="number">30</span>
            </div>
            <div class="stat-item">
              Total Time Writing: <span class="number">5</span>h <span class="number">30</span>m
            </div>
            <div class="stat-item">
              Average Time per Entry: <span class="number">22</span>m
            </div>
          </div>
        </div>
      `,
      },
    ],
  },
  {
    id: 6,
    title: 'Track your emotional journey',
    description: 'See how your moods relate to your writing over time',
    includeScript: true,
    script: 'rflect moods --calendar',
    terminal: [
      {
        command: 'rflect moods --calendar',
        outputHTML: `
        <div class="terminal-output--item">
          <h3 class="message"><span class="emoji">😌 peaceful Calendar:</span> <span class="date">January <span class="number">2025</span></span></h3>
          <div class="calendar-grid">
            <div class="calendar-header">Su  Mo  Tu  We  Th  Fr  Sa</div>
            <div class="calendar-week">
              <span class="number">1</span>   
              <span class="number">2</span>   
              <span class="number">3</span>   
              <span class="number">4</span>   
              <span class="number">5</span>   
              <span class="number">6</span>
            </div>
            <div class="calendar-week">
              <span class="number">7</span>   
              <span class="emoji">😌</span>  
              <span class="number">9</span>   
              <span class="number">10</span>  
              <span class="number">11</span>  
              <span class="emoji">😌</span>  
              <span class="number">13</span>
            </div>
            <div class="calendar-week">
              <span class="number">14</span>  
              <span class="number">15</span>  
              <span class="emoji">😌</span>  
              <span class="number">17</span>  
              <span class="number">18</span>  
              <span class="number">19</span>  
              <span class="number">20</span>
            </div>
            <div class="calendar-week">
              <span class="number">21</span>  
              <span class="number">22</span>  
              <span class="number">23</span>  
              <span class="emoji">😌</span>  
              <span class="number">25</span>  
              <span class="number">26</span>  
              <span class="number">27</span>
            </div>
            <div class="calendar-week">
              <span class="number">28</span>  
              <span class="number">29</span>  
              <span class="number">30</span>  
              <span class="number">31</span>
            </div>
          </div>
        </div>
      `,
      },
      {
        command: '',
        outputHTML: `
          <div class="terminal-output--item">
            <p>You felt <span class="emoji">😌 peaceful </span> on <span class="number">4</span> days this month.</p>
</div>`
      }
    ],
  },
  {
    id: 7,
    title: 'Customize your rflect account',
    description: 'Adjust goals and settings',
    includeScript: true,
    script: 'rflect config',
    terminal: [
      {
        command: 'rflect config',
        outputHTML: `
  <div class="terminal-output--item">
      <h3 class="message">Available options:</h3>
</div>
`,
      },
      {
        command: '',
        outputHTML: `
  <div class="terminal-output--item">
<div class="config-options">
  <div class="option-item">
    <span class="command">rflect config --name</span>
    <span class="description">Set your display name</span>
  </div>
</div>
</div>
`,
      },
      {
        command: '',
        outputHTML: `
  <div class="terminal-output--item">
<div class="config-options">
  <div class="option-item">
    <span class="command">rflect config --show</span>
    <span class="description">View current settings</span>
  </div>
`,
      },
      {
        command: '',
        outputHTML: `
  <div class="terminal-output--item">
<div class="config-options">
  <div class="option-item">
    <span class="command">rflect config --install</span>
    <span class="description">Reinstall rflect configuration</span>
  </div>
</div>
</div>
`,
      },
      {
        command: '',
        outputHTML: `
  <div class="terminal-output--item">
<div class="config-options">
  <div class="option-item">
    <span class="command">rflect config --editor</span>
    <span class="description">Toggle system editor usage</span>
  </div>
</div>
</div>
`,
      },
      {
        command: '',
        outputHTML: `
  <div class="terminal-output--item">
<h3 class="message">Goal configuration:</h3>
<div class="goal-options">
  <div class="option-item">
    <span class="command">rflect config --goal</span>
    <span class="description">Set writing goals</span>
  </div>
</div>
</div>
`,
      },
      {
        command: '',
        outputHTML: `
          <div class="option-details message">
    Options: <span class="command">-t entries|words -f daily|weekly|monthly -v &lt;number&gt;</span>
  </div>
`
      }
    ],
  },
  {
    id: 8,
    title: 'Upcoming features',
    description: 'Get a peek at future rflect features',
    includeScript: true,
    script: 'rflect upcoming',
    terminal: [
      {
        command: 'rflect upcoming',
        outputHTML: `
        <div class="terminal-output--item">
          <p class="message">Coming soon to rflect:</p>
        </div>
      `,
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
          <div class="commands-section">
            <strong class="command-header">FEATURES:</strong>
          </div>
        </div>
      `,
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
          <div class="commands-section">
            <div class="command-item">
              <span class="command">rflect theme</span>
              <span class="description">Personalize your journaling experience with themes</span>
            </div>
          </div>
        </div>`
      },
      {
        command: '',
        outputHTML:
        `<div class="terminal-output--item">
          <div class="commands-section">
            <div class="command-item">
              <span class="command">rflect backup</span>
              <span class="description">Keep your reflections safe with cloud backup</span>
            </div>
          </div>
        </div>`
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
          <div class="commands-section">
            <div class="command-item">
              <span class="command">rflect search &lt;term&gt;</span>
              <span class="description">Find specific moments in your journey</span>
            </div>
          </div>
        </div>
`
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
          <div class="commands-section">
            <div class="command-item">
              <span class="command">rflect remind</span>
              <span class="description">Set gentle reminders for your reflection practice</span>
            </div>
          </div>
        </div>
`
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
          <div class="commands-section">
            <div class="command-item">
              <span class="command">rflect encrypt</span>
              <span class="description">Add extra privacy to selected entries</span>
            </div>
          </div>
        </div>
`
      },
      {
        command: '',
        outputHTML: `
        <div class="terminal-output--item">
          <div class="commands-section">
            <div class="command-item">
              <span class="command">rflect analyze</span>
              <span class="description">Gain insights into your reflection patterns with AI</span>
            </div>
          </div>
        </div>
`
      }
    ],
  },
];
