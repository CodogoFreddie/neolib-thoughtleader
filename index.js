#!/usr/bin/env node

const rge = require("@freddieridell/regex-generator-expander");

const generator = rge({
	root: ({ preamble, number, xx, job, postamble, hashtags }) => [
		rge`${preamble} ${number} more ${xx} ${job}. ${postamble}`,
		rge`${preamble} ${number} more ${xx} ${job}. ${postamble} ${hashtags}`,
	],

	preamble: () => [
		"I can't wait until there's",
		"Here's a world I'd like to see:",
		"Hey, how 'bout",
		"How much longer until we have",
		"just had a beautiful thought...",
		"think it's about time for",
		"We'll never #resist @realdonaldtrump without",
		"what's the best way to #disrupt #startups? Simple:",
		"When will @elonmusk have",
		"Have people tried putting",
		"Not enough companies have",
		"Thought leaders are trying to get",
		"Crossing the chasm requires",
		"All top scale-ups know you need",
		"Serious talk: I need to see",
		"In 2021, the world needs",
		"It's 2020! When will we get",
	],

	number: () => [
		"10X more",
		"a few",
		"a fucking butt tonne more",
		"a handful of",
		"juuuuuusst a few more",
		"lots of",
		"many",
		"many many",
		"many many many",
		"many many many many",
		"oodles of",
		"some",
		"tonnes of",
		"more",
		"a board room full of",
		"a slide deck of",
		"Unsplashed stock photos with",
		"enough",
		"the",
		"a team of",
	],

	xx: () => [
		"broards",
		"chiquitas",
		"cuties",
		"dames",
		"females",
		"gurls",
		"honey bunnies",
		"hoochie coochie mammas",
		"laaadies",
		"ladies",
		"lovely ladies",
		"lovely lovely ladies",
		"lovely lovely lovely ladies",
		"lovely lovely lovely lovely ladies",
		"of the fairer sex",
		"senioritas",
		"skirts",
		"spicy mamma jammas",
		"womenfolk",
		"cutie-pies",
		"strong independent women",
		"gals",
	],

	job: () => [
		"behind keyboards",
		"boshing out a some serverless apps",
		"coordinating a load of goroutines",
		"crunching numbers",
		"crunching the numbers",
		"defining schemas",
		"depricating some perl codebases",
		"doing git merges",
		"doing git pulls",
		"doing git rebases",
		"doing programming",
		"programming something",
		"pushing to production",
		"down the old code hole",
		"fucking about with mercurial",
		"generating varadic types",
		"having a go at WASM",
		"making web apps",
		"managaging databases",
		"on the blockchain",
		"orchestrating kubernetes",
		"plugging in USBs",
		"publishing to NPM",
		"running the numbers",
		"smashing out some c++",
		"thinking about codes",
		"throwing errors",
		"training some neural nets",
		"using webpack",
		"watching robot wars",
		"writing bash scripts",
		"writing some ruby koans",
		"talking about react",
		"banging on about angular",
		"advocating for vue.js",
		"explaining monads to people",
		"opening issues",
		"running open source projects",
		"taking over",
		"calling the shots",
		"building microservices",
		"being thought leaders",
	],

	postamble: ({}) => [
		"Awooooogaa",
		"But hey, what do I know?!?",
		"But maybe that's just me, what do you think?",
		"don't you think..?",
		"do you feel me?",
		"if not now, then when?",
		"Lovely",
		"nice",
		"Retweet if you agree",
		"@ycombinator",
		"It is #2020 after all",
		"Do I need to say it again?",
		"And yet we've been saying this for years!",
	],

	hashtags: ({ hashtag }) => [
		rge`${hashtag}`,
		rge`${hashtag} ${hashtag}`,
		rge`${hashtag} ${hashtag} ${hashtag}`,
	],
	hashtag: () => [
		"#EveryLittleHelps",
		"#FridayIsGuyday",
		"#JustMyTake",
		"#MotivationMonday",
		"#SaturdayWomenMatterToday",
		"#SundayFunday",
		"#ThoughtLeadership",
		"#ThursdayThoughts",
		"#TuesdayTutelage",
		"#WisdomWednesday",
		"#femenism",
		"#progressive",
	],
});

new Array(5).fill(null).forEach(() => {
	console.log(generator.root());
});
