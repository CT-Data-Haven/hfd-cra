const lipsum = require('lorem-ipsum');

const charts = {
	overall: [
		{
			id: 'expectancy',
			full: 'Directly measure an improvement in life expectancy and premature death rates',
			goal: lipsum({ count: 15, units: 'words' }),
			charts: [
				{
					indicator: 'premature death rate',
					title: 'Years of potential life lost before age 75',
					width: 8,
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
					width: 8,
					source: 'Community Wellbeing Survey'
				}, {
					indicator: 'child wellbeing scores',
					title: 'Child and adolescent wellbeing',
					width: 8,
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
					width: 8,
					source: 'xx'
				}, {
					indicator: 'hospital encounters',
					title: 'Hospital encounters',
					width: 8,
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
					width: 8,
					source: 'Community Wellbeing Survey'
				}, {
					indicator: 'dental',
					title: 'Dental visits',
					width: 8,
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
					width: 8,
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
					width: 8,
					source: 'xx'
				}, {
					indicator: 'injury hospital visits',
					title: 'Hospital encounters for injuries and purposeful injury',
					width: 8,
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
					width: 8,
					source: 'CHIME'
				}, {
					indicator: 'emergency response',
					title: 'Emergency response',
					width: 8,
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
					width: 8,
					source: 'Community Wellbeing Survey'
				}, {
					indicator: 'food security',
					title: 'Food security',
					width: 8,
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
					width: 8,
					source: 'Community Wellbeing Survey'
				}, {
					indicator: 'lung cancer',
					title: 'Lung cancer incidence',
					width: 8,
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
					width: 8,
					source: 'CHIME'
				}, {
					indicator: 'asthma prevalence',
					title: 'Asthma prevalence and severity',
					width: 8,
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
					width: 8,
					source: 'CHIME'
				}, {
					indicator: 'chronic disease prevalence',
					title: 'Chronic disease prevalence',
					width: 8,
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
					width: 8,
					source: 'xx'
				}, {
					indicator: 'graduation rate',
					title: 'Graduation rate and college persistence',
					width: 8,
					source: 'xx'
				}, {
					indicator: 'early childhood education',
					title: 'Access to quality early childhood education',
					width: 8,
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
					title: 'Civic wellbeing',
					width: 8,
					source: 'Community Wellbeing Survey'
				}, {
					indicator: 'local collaboratives',
					title: 'Local collaboratives and initiatives',
					width: 8,
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
					width: 8,
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
					width: 8,
					source: 'Community Wellbeing Survey'
				}, {
					indicator: 'violence',
					title: 'Injury due to violence',
					width: 8,
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
					width: 8,
					source: 'American Community Survey'
				}, {
					indicator: 'foreclosure',
					title: 'Foreclosures, vacancies, and evictions',
					width: 8,
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
					width: 8,
					source: 'xx'
				}, {
					indicator: 'housing problems',
					title: 'Reported housing problems',
					width: 8,
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
					title: 'Median family income',
					width: 8,
					source: 'American Community Survey'
				}, {
					indicator: 'underemployment',
					title: 'Underemployment and job access',
					width: 8,
					source: 'Community Wellbeing Survey'
				}, {
					indicator: 'job placement',
					title: 'Job placement and retention',
					width: 8,
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
					width: 8,
					source: 'xx'
				}, {
					indicator: 'parks',
					title: 'Parks condition and access',
					width: 8,
					source: 'Community Wellbeing Survey'
				}
			]
		}
	]
};

export default charts;
