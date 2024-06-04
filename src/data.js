import supervisorIcon from './assets/images/icon-supervisor.svg';
import teamBuilderIcon from './assets/images/icon-team-builder.svg';
import karmaIcon from './assets/images/icon-karma.svg';
import calculatorIcon from './assets/images/icon-calculator.svg';

const features = [
  {
    id: 1,
    title: 'Supervisor',
    text: 'Monitors activity to identify project roadblocks',
    icon: supervisorIcon,
  },
  {
    id: 2,
    title: 'Team Builder',
    text: 'Scans our talent network to create the optimal team for your project ',
    icon: teamBuilderIcon,
  },
  {
    id: 3,
    title: 'Karma',
    text: 'Regularly evaluates our talent to ensure quality',
    icon: karmaIcon,
  },
  {
    id: 4,
    title: 'Calculator',
    text: 'Uses data from past projects to provide better delivery estimates',
    icon: calculatorIcon,
  },
];

export default features;
