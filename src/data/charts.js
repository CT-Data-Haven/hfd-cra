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
					source: 'Community Wellbeing Survey'
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
					title: 'Percent who didn\'t get needed health care in the past year',
					source: 'Community Wellbeing Survey'
				}, {
					indicator: 'dental',
					title: 'Dental visits',
					source: 'xx'
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
					title: 'Hospital encounters for injuries and purposeful injury',
					source: 'xx'
				}
			]
		}, {
			id: 'sumh',
			full: 'Substance use disorders and mental health',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'overdoses',
					title: 'Hospital encounters and deaths related to overdoses',
					source: 'CHIME'
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
					source: 'Community Wellbeing Survey'
				}, {
					indicator: 'food security',
					title: 'Food security',
					source: 'Community Wellbeing Survey'
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
					source: 'Community Wellbeing Survey'
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
					title: 'Hospital encounter rates for asthma',
					source: 'CHIME'
				}, {
					indicator: 'asthma prevalence',
					title: 'Asthma prevalence and severity',
					source: 'Community Wellbeing Survey'
				}
			]
		}, {
			id: 'disease',
			full: 'Early onset of chronic diseases',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'chronic disease hospital visits',
					title: 'Hospital encounter rates for chronic disease and "avoidable" hospitalization',
					source: 'CHIME'
				}, {
					indicator: 'chronic disease prevalence',
					title: 'Chronic disease prevalence',
					source: 'Community Wellbeing Survey'
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
					title: '3rd grade reading scores',
					source: 'xx'
				}, {
					indicator: 'graduation rate',
					title: 'Graduation rate and college persistence',
					source: 'xx'
				}, {
					indicator: 'preschool',
					title: 'Preschool enrollment by school type, 2016',
					component: 'bar',
					scheme: 'indigo2',
					rExtent: [ 0, 0.75 ],
					hasLegend: true,
					ticks: 5,
					source: 'American Community Survey'
				}
			]
		}, {
			id: 'resilience',
			full: 'Community resilience and inclusion',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'civic wellbeing',
					title: 'Civic wellbeing',
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
					title: 'Perceived safety of taking walks at night',
					source: 'Community Wellbeing Survey'
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
					title: 'Homeownership',
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
					title: 'Underemployment and job access',
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
					indicator: 'parks',
					title: 'Parks condition and access',
					source: 'Community Wellbeing Survey'
				}
			]
		}
	]
};

export default charts;
