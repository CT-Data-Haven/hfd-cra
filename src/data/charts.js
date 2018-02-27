const lipsum = require('lorem-ipsum');

const charts = {
	overall: [
		{
			id: 'expectancy',
			full: 'Directly measure an improvement in life expectancy and premature death rates',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'ypll',
					title: 'Years of potential life lost before age 75',
					source: 'xx'
				}
			]
		}, {
			id: 'wellbeing',
			full: 'Directly measure improvements in personal well-being and quality of life',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'wellbeing scores',
					title: 'Wellbeing scores',
					subtitle: 'Scores calculated from variety of survey measures',
					source: 'Community Wellbeing Survey',
					component: 'bar',
					type: { type: 'swarm', r: 8 },
					format: 'd',
					hasLegend: true,
					projection: 'horizontal',
					margin: { top: 10, right: 16, bottom: 40, left: 100 },
					thresh: 20,
					width: 16,
					rExtent: [ 40, 95 ]
				}, {
					indicator: 'self rated health',
					title: 'Adults in excellent or very good self-rated health, 2015',
					subtitle: 'Including Hartford adults by income',
					source: 'Community Wellbeing Survey',
					component: 'bar',
					scheme: 'twotone',
					width: 10
				}, {
					indicator: 'child wellbeing scores',
					title: 'Child and adolescent wellbeing',
					source: 'xx'
				}
			]
		}, {
			id: 'economy',
			full: 'Measure value of investment by benchmarking total health economy relative to health and wellbeing outcomes',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'claims',
					title: 'Claims',
					source: 'xx'
				}, {
					indicator: 'hospital encounters',
					title: 'Hospital encounters',
					source: 'xx'
				}
			]
		}, {
			id: 'measurement',
			full: 'Collect other measures to inform and provide context to health improvement efforts',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: []
		}
	],
	health: [
		{
			id: 'access',
			full: 'Access to health care',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'missed health care',
					title: 'Adults who didn\'t get needed health care in the past year, 2015',
					source: 'Community Wellbeing Survey',
					component: 'bar'
				}, {
					indicator: 'annual dental',
					title: 'Adults with dental visit in past year, 2015',
					source: 'Community Wellbeing Survey',
					component: 'bar'
				}, {
					indicator: 'dental hospital visits',
					title: 'Hospital encounters for preventable dental conditions, 2012-2014',
					subtitle: 'Age-adjusted annualized rate per 10,000 residents',
					source: 'CHIME',
					component: 'bar',
					format: 'd'
				}
			]
		}, {
			id: 'maternal',
			full: 'Maternal and infant health',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'low birthweight',
					title: 'Low birthweight',
					source: 'xx'
				}
			]
		}, {
			id: 'violence',
			full: 'Injury and violence',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'injury ypll',
					title: 'Years of life lost from injuries',
					source: 'xx'
				}, {
					indicator: 'injury hospital visits',
					title: 'Hospital encounters for homicide and purposeful injury, 2012-2014',
					subtitle: 'Age-adjusted annualized rate per 10,000 residents',
					source: 'CHIME',
					component: 'bar',
					format: 'd'
				}
			]
		}, {
			id: 'sumh',
			full: 'Substance use disorders and mental health',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'overdoses',
					title: 'Hospital encounters for substance abuse, 2012-2014',
					subtitle: 'Age-adjusted annualized rate per 10,000 residents',
					source: 'CHIME',
					component: 'bar',
					format: 'd'
				}, {
					indicator: 'emergency response',
					title: 'Emergency response',
					source: 'xx'
				}
			]
		}, {
			id: 'nutrition',
			full: 'Nutrition, exercise, and weight status',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'obesity',
					title: 'Obesity rate',
					source: 'Community Wellbeing Survey',
					component: 'bar'
				}, {
					indicator: 'food insecurity',
					title: 'Adults reporting food insecurity, 2015',
					subtitle: 'Including Hartford adults by race',
					source: 'Community Wellbeing Survey',
					component: 'bar',
					scheme: 'twotone'
				}
			]
		}, {
			id: 'smoking',
			full: 'Smoking and tobacco',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'smoking',
					title: 'Smoking rate',
					subtitle: 'Including Hartford adults by sex',
					source: 'Community Wellbeing Survey',
					component: 'bar',
					scheme: 'twotone'
				}, {
					indicator: 'lung cancer',
					title: 'Lung cancer incidence',
					source: 'xx'
				}
			]
		}, {
			id: 'asthma',
			full: 'Asthma',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'asthma hospital visits',
					title: 'Hospital encounter rate for asthma, children under 5, 2012-2014',
					subtitle: 'Annualized rate per 10,000 children',
					source: 'CHIME',
					component: 'bar',
					format: 'd'
				}, {
					indicator: 'asthma prevalence',
					title: 'Asthma prevalence among adults, 2015',
					subtitle: 'Including Hartford adults by race',
					source: 'Community Wellbeing Survey',
					component: 'bar',
					scheme: 'twotone'
				}, {
					indicator: 'asthma severity',
					title: 'Moderate to severe asthma among adults, 2015',
					subtitle: 'Share of adults with asthma who use inhaler 3+ times per week',
					source: 'Community Wellbeing Survey',
					component: 'bar'
				}
			]
		}, {
			id: 'disease',
			full: 'Early onset of chronic diseases',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'diabetes hospital visits',
					title: 'Hospital encounter rates for diabetes, 2012-2014',
					subtitle: 'Age-adjusted annualized rates per 10,000 residents',
					source: 'CHIME',
					component: 'bar',
					format: 'd'
				}, {
					indicator: 'heart disease hospital visits',
					title: 'Hospital encounter rates for heart disease, 2012-2014',
					subtitle: 'Age-adjusted annualized rates per 10,000 residents',
					source: 'CHIME',
					component: 'bar',
					format: 'd'
				}, {
					indicator: 'chronic disease prevalence',
					title: 'Adult chronic disease prevalence, 2015',
					source: 'Community Wellbeing Survey',
					component: 'bar',
					type: 'clusterbar',
					hasLegend: true
				}
			]
		}
	],
	social: [
		{
			id: 'education',
			full: 'Education',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: '3rd grade reading',
					title: 'SBAC reading pass rate, 3rd grade, 2016-17',
					subtitle: 'Share of students meeting or exceeding goal',
					source: 'CT State Dept of Education',
					component: 'bar'
				}, {
					indicator: 'preschool',
					title: 'Preschool enrollment by school type, 2016',
					subtitle: 'Percent of children ages 3 and 4',
					component: 'bar',
					scheme: 'indigo2',
					rExtent: [ 0, 0.75 ],
					hasLegend: true,
					ticks: 5,
					source: 'American Community Survey'
				}, {
					indicator: 'graduation rate',
					title: 'Graduation rate and college persistence',
					source: 'xx'
				}
			]
		}, {
			id: 'resilience',
			full: 'Community resilience and inclusion',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'civic wellbeing',
					title: 'Civic wellbeing, 2015',
					source: 'Community Wellbeing Survey'
				}, {
					indicator: 'local collaboratives',
					title: 'Local collaboratives and initiatives',
					source: 'xx'
				}
			]
		}, {
			id: 'food',
			full: 'Access to healthy food',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'food environment',
					title: 'Food environment',
					source: 'xx'
				}
			]
		}, {
			id: 'safety',
			full: 'Safe neighborhoods',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'walking at night',
					title: 'Feel safe walking at night, 2015',
					subtitle: 'Including Hartford adults by sex',
					source: 'Community Wellbeing Survey',
					component: 'bar',
					scheme: 'twotone'
				}, {
					indicator: 'violence',
					title: 'Injury due to violence',
					source: 'xx'
				}
			]
		}, {
			id: 'housingsecurity',
			full: 'Housing security',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'homeownership',
					title: 'Homeownership, 2016',
					subtitle: 'Percent of all households',
					source: 'American Community Survey',
					component: 'bar'
				}, {
					indicator: 'foreclosure',
					title: 'Foreclosures, vacancies, and evictions',
					source: 'xx'
				}
			]
		}, {
			id: 'housingquality',
			full: 'Housing quality',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'housing code',
					title: 'Housing code violations',
					source: 'xx'
				}, {
					indicator: 'housing problems',
					title: 'Reported housing problems',
					source: 'Community Wellbeing Survey'
				}
			]
		}, {
			id: 'employment',
			full: 'Secure employment and income',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'median family income',
					title: 'Median family income, 2016',
					source: 'American Community Survey',
					component: 'bar',
					scheme: 'bold4',
					type: 'clusterbar',
					format: '$.2s',
					hasLegend: true
				}, {
					indicator: 'underemployment',
					title: 'Underemployment and job access, 2015',
					source: 'Community Wellbeing Survey'
				}, {
					indicator: 'child poverty',
					title: 'Child poverty rates by age, 2016',
					source: 'American Community Survey',
					component: 'bar',
					type: 'clusterbar',
					hasLegend: true,
					width: 16
				}, {
					indicator: 'job placement',
					title: 'Job placement and retention',
					source: 'xx'
				}
			]
		}, {
			id: 'built',
			full: 'Quality of built environment',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'complete streets',
					title: 'Complete streets',
					source: 'xx'
				}, {
					indicator: 'parks and sidewalks',
					title: 'Report local parks, sidewalks in good condition, 2015',
					source: 'Community Wellbeing Survey',
					component: 'bar',
					type: 'clusterbar',
					hasLegend: true,
					thresh: 30
				}
			]
		}
	]
};

export default charts;
