import {
  format,
  getDate,
  getDay,
  getDaysInMonth,
  startOfMonth,
} from 'date-fns';

// Sample mood calendar for the current month
function createMoodCalendar() {
  const today = new Date();
  const firstWeekday = getDay(startOfMonth(today));
  const totalDays = getDaysInMonth(today);
  const moodDays = [2, 5, 7, 12, 16, 20, 23, 24];

  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    .map((day) => `<span class="weekday">${day}</span>`)
    .join('');
  const blanks = '<span></span>'.repeat(firstWeekday);

  let days = '';
  for (let day = 1; day <= totalDays; day++) {
    let status = 'empty';
    if (day > getDate(today)) status = 'future';
    else if (moodDays.includes(day)) status = 'mood';
    // the CLI shows the mood emoji in place of the date
    const label = status === 'mood' ? '😌' : day;
    days += `<span class="day day--${status}">${label}</span>`;
  }

  // only count mood days that have already happened this month
  const moodCount = moodDays.filter((day) => day <= getDate(today)).length;

  return {
    calendar: `
      <div class="calendar">
        <p class="calendar-header">😌 peaceful Calendar: ${format(today, 'MMMM yyyy')}</p>
        <div class="calendar-grid">${weekdays}${blanks}${days}</div>
      </div>`,
    summary: `<p class="output">You felt <span class="number">😌 peaceful</span> on <span class="number">${moodCount}</span> ${moodCount === 1 ? 'day' : 'days'} this month.</p>`,
  };
}

const moodCalendar = createMoodCalendar();

// Terminal shown in the hero
export const heroTerminal = {
  title: 'rflect write',
  terminal: [
    {
      command: 'rflect write',
      outputHTML: `
        <p class="prompt">? How are you feeling today?</p>
        <p class="answer">😌 peaceful</p>
        <p class="prompt">? What made you feel most alive today?</p>
        <p class="writing-box">The walk home after the rain. Everything smelled like cut grass and the street was quiet for once.</p>
        <p class="prompt">? Add tags (comma-separated) <span class="muted">[optional]</span></p>
        <p class="answer">gratitude, nature</p>`,
    },
    {
      command: '',
      outputHTML: `
        <p class="heading">✨ Your reflection has been saved!</p>
        <p class="indent">Word Count: <span class="number">18</span></p>
        <p class="indent">Time Spent Writing: <span class="number">2</span>m <span class="number">14</span>s</p>`,
    },
  ],
};

// Scroll-snapped feature windows
export const features = [
  {
    id: 1,
    title: 'Install rflect',
    description:
      'A command line tool for guided reflections and journaling. One global install and you are ready to write.',
    includeScript: true,
    script: 'npm install -g rflect',
    terminal: [
      {
        command: 'npm install -g rflect',
        outputHTML: `
          <p class="output">added <span class="number">56</span> packages, including:</p>
          <p class="indent">calendar-js · date-fns · chalk · commander · inquirer</p>`,
      },
      {
        command: 'rflect',
        outputHTML: `
          <p class="output">📝 A CLI tool for guided reflections and journaling.</p>
          <p class="heading">COMMANDS:</p>
          <div class="command-item"><span class="command">write</span><span class="description">Start a new reflection with a thoughtfully curated prompt.</span></div>
          <div class="command-item"><span class="command">show [options]</span><span class="description">Browse and revisit your past reflections.</span></div>
          <div class="command-item"><span class="command">prompts [options]</span><span class="description">Browse available writing prompts.</span></div>
          <div class="command-item"><span class="command">tags [options]</span><span class="description">Discover themes in your reflection journey.</span></div>
          <div class="command-item"><span class="command">moods [options]</span><span class="description">Track your emotional journey through writing.</span></div>
          <div class="command-item"><span class="command">init</span><span class="description">Set up your rflect account with initial preferences.</span></div>
          <div class="command-item"><span class="command">config [options]</span><span class="description">Customize your reflection preferences.</span></div>
          <div class="command-item"><span class="command">stats [options]</span><span class="description">View insights about your writing journey.</span></div>
          <div class="command-item"><span class="command">delete [options]</span><span class="description">Manage your reflection history.</span></div>
          <div class="command-item"><span class="command">upcoming</span><span class="description">Peek at future rflect features</span></div>`,
      },
    ],
  },
  {
    id: 2,
    title: 'Set up your account',
    description:
      'Set personal writing preferences and the goals you want to reach.',
    includeScript: true,
    script: 'rflect init',
    terminal: [
      {
        command: 'rflect init',
        outputHTML: `
          <p class="output">Welcome to rflect!</p>
          <p class="prompt">? What should I call you?</p>
          <p class="answer">Julia</p>
          <p class="prompt">? Would you like to use your system editor for writing? (e.g., vim, nano, notepad)?</p>
          <p class="answer">No</p>
          <p class="prompt">? Would you like to set writing goals?</p>
          <p class="answer">Yes</p>
          <p class="prompt">? How often would you like to write with rflect?</p>
          <p class="answer">Daily entries</p>
          <p class="prompt">? How many entries would you like to write daily?</p>
          <p class="answer">1</p>
          <p class="prompt">? How often would you like to track your word count?</p>
          <p class="answer">Weekly</p>
          <p class="prompt">? How many words would you like to write weekly?</p>
          <p class="answer">2000</p>`,
      },
      {
        command: '',
        outputHTML: `
          <p class="heading">✨ Welcome, Julia!</p>
          <p class="output">You will be writing in basic text inputs with rflect.</p>
          <p class="output">Your goals:</p>
          <p class="indent">Write <span class="number">1</span> entry daily</p>
          <p class="indent">Write <span class="number">2000</span> words weekly</p>`,
      },
    ],
  },
  {
    id: 3,
    title: 'Write a reflection',
    description:
      'Answer a thoughtfully curated prompt, log how you feel and tag what it was about.',
    includeScript: true,
    script: 'rflect write',
    terminal: [
      {
        command: 'rflect write',
        outputHTML: `
          <p class="prompt">? How are you feeling today?</p>
          <p class="answer">😌 peaceful</p>
          <p class="prompt">? What made you feel most alive today?</p>
          <p class="answer muted">[Writing your reflection...]</p>
          <p class="prompt">? Add tags (comma-separated) <span class="muted">[optional]</span></p>
          <p class="answer">gratitude, mindfulness, nature</p>`,
      },
      {
        command: '',
        outputHTML: `
          <p class="heading">✨ Your reflection has been saved!</p>
          <p class="indent">Word Count: <span class="number">250</span></p>
          <p class="indent">Time Spent Writing: <span class="number">15</span>m</p>`,
      },
    ],
  },
  {
    id: 4,
    title: 'Browse prompts',
    description:
      'Look through the current collection of writing prompts before you start.',
    includeScript: true,
    script: 'rflect prompts --all',
    terminal: [
      {
        command: 'rflect prompts --all',
        outputHTML: `
          <p class="heading">All Available Prompts</p>
          <p class="output"><span class="number">1</span>. What made you feel most alive today?</p>
          <p class="output"><span class="number">2</span>. What's something you're looking forward to, and why?</p>
          <p class="output"><span class="number">3</span>. What's a challenge you faced today and how did you handle it?</p>
          <p class="output"><span class="number">4</span>. If you could redo one moment from today, what would it be?</p>
          <p class="output"><span class="number">5</span>. What's something new you learned about yourself recently?</p>
          <p class="output"><span class="number">6</span>. What surprised you today?</p>
          <p class="output"><span class="number">7</span>. When did you feel most confident today?</p>
          <p class="muted">...and more</p>`,
      },
    ],
  },
  {
    id: 5,
    title: 'Track your moods',
    description:
      'See how often you feel each mood and which days you felt it.',
    includeScript: true,
    script: 'rflect moods --calendar',
    terminal: [
      {
        command: 'rflect moods --calendar',
        outputHTML: moodCalendar.calendar,
      },
      {
        command: '',
        outputHTML: moodCalendar.summary,
      },
    ],
  },
  {
    id: 6,
    title: 'See your writing stats',
    description: 'Streaks, word counts and time spent, all in one view.',
    includeScript: true,
    script: 'rflect stats --all',
    terminal: [
      {
        command: 'rflect stats --all',
        outputHTML: `
          <p class="heading">Entry Statistics</p>
          <p class="indent">Total Entries Written: <span class="number">15</span></p>
          <p class="indent">Total Words Written: <span class="number">3,750</span></p>
          <p class="indent">Average Words per Entry: <span class="number">250</span></p>`,
      },
      {
        command: '',
        outputHTML: `
          <p class="heading">Writing Streak</p>
          <p class="indent">Current Streak: <span class="number">5</span> days</p>
          <p class="indent">Longest Streak: <span class="number">7</span> days</p>`,
      },
      {
        command: '',
        outputHTML: `
          <p class="heading">Time Statistics</p>
          <p class="indent">Total Time Writing: <span class="number">5</span>h <span class="number">30</span>m</p>
          <p class="indent">Average Time per Entry: <span class="number">22</span>m</p>`,
      },
    ],
  },
  {
    id: 7,
    title: 'Customize your account',
    description: 'Adjust goals and settings you set earlier, or start over.',
    includeScript: true,
    script: 'rflect config',
    terminal: [
      {
        command: 'rflect config',
        outputHTML: `
          <p class="output">Available options:</p>
          <div class="command-item"><span class="command">--name</span><span class="description">Set your display name</span></div>
          <div class="command-item"><span class="command">--show</span><span class="description">View current settings</span></div>
          <div class="command-item"><span class="command">--install</span><span class="description">Reinstall rflect configuration</span></div>
          <div class="command-item"><span class="command">--editor</span><span class="description">Toggle system editor usage</span></div>`,
      },
      {
        command: '',
        outputHTML: `
          <p class="heading">Goal configuration:</p>
          <div class="command-item"><span class="command">--goal</span><span class="description">Set writing goals</span></div>
          <p class="indent muted">-t entries|words -f daily|weekly|monthly -v &lt;number&gt;</p>`,
      },
    ],
  },
  {
    id: 8,
    title: "What's coming next",
    description: 'A peek at the features planned for future updates.',
    includeScript: true,
    script: 'rflect upcoming',
    terminal: [
      {
        command: 'rflect upcoming',
        outputHTML: `
          <p class="output">Coming soon to rflect:</p>
          <div class="command-item"><span class="command">rflect theme</span><span class="description">Personalize your journaling experience with custom themes</span></div>
          <div class="command-item"><span class="command">rflect backup</span><span class="description">Keep your reflections safe with cloud backup</span></div>
          <div class="command-item"><span class="command">rflect search &lt;term&gt;</span><span class="description">Find specific moments in your journey</span></div>
          <div class="command-item"><span class="command">rflect remind</span><span class="description">Set gentle reminders for your reflection practice</span></div>
          <div class="command-item"><span class="command">rflect encrypt</span><span class="description">Add extra privacy to selected entries</span></div>
          <div class="command-item"><span class="command">rflect analyze</span><span class="description">Gain insights into your reflection patterns with AI</span></div>`,
      },
    ],
  },
];
