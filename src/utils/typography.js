import Typography from 'typography';
import altonTheme from 'typography-theme-alton';

// const typography = new Typography(altonTheme);

altonTheme.baseFontSize = '16px';
altonTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    'h1': {
        marginBottom: 0,
    },
    'a': {
        color: '#333',
    }
});

const typography = new Typography(altonTheme);

export default typography