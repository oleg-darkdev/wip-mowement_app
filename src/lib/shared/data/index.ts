import navigation from './navigation';
import faq from './faq';
import goals from './goals';

import {
	allYears,
	// 1985
	records_1985,
	action1,
	action2,
	action3,
	action4,
	action5,
	action6,
	action7,

	// 1986
	records_1986,
	action9,
	action10,
	action11,
	action12,
	action13,
	action14,
	action15,
	action16,
	action17,
	action18,
	action19,
	action20,
	action21,
	action22,
	action23,
	action24,
	action25,
	action26,
	action27,
	action28,
	action29,
	action30,
	action31,
	action32,
	action33,
	action34,
	action35,
	action36,
	// 1987
	records_1987,
	action66,
	action67,
	action68,
	action69,
	action70,
	action145,
	action370,
	action380,
	action37,
	action38,
	action39,
	action40,
	action41,
	action42,
	action43,
	action44,
	action45,
	action46,
	action47,
	action48,
	action49,
	action50,
	action51,
	action52,
	action53,
	action54,
	action55,
	action56,
	action57,
	action58,
	action59,
	action60,
	action61,
	action62,
	action63,
	action64,
	action65,
	action71,
	action72,
	action73,
	action74,
	action75,
	action76,
	action77,
	action78,
	action79,
	action80,
	action81,
	action82,
	action83,
	action84,
	action85,
	action86,
	action87,
	action88,
	action89,
	action90,
	action91,
	action92,
	action93,
	action94,
	action95,
	action96,
	action97,
	action98,
	action99,
	action100,
	action101,
	action102,
	action103,
	action104,
	action105,
	action106,
	action107,
	action108,
	action109,
	action110,
	action111,
	action112,
	action113,
	action114,
	action115,
	action116,
	action117,
	action118,
	action119,
	action120,
	action121,
	action122,
	action123,
	action124,
	action125,
	action126,
	action127,
	action128,
	action129,
	action130,
	action131,
	action132,
	action133,
	action134,
	action135,
	action136,
	action137,
	action138,
	action139,
	action140,
	action142,
	// 1988
	records_1988,

	// 1989
	records_1989,

	// 1990
	records_1990,

	// 1991
	records_1991,

	// 1992
	records_1992,

	//
	allActionsCounter
} from './actions/actions';
import navigationNgo from './navigationNgo';
import partnersList from './partnersList';
import communityList from './communityList';
import otherLinks from './navigationOtherLinks';
import productslIst from './productslIst';

import { activistsList, activistsListApp, activistsListCount } from './activists';

import {
	allOrgsCounter,
	localOrgs,
	worldwideOrgs,
	allOrgs,
	nsz,
	aro,
	fmw,
	rsa,
	rsz,
	twe,
	ch77,
	fpmb,
	wod,
	dzzsr
} from './organisations';
import {
	machowa,
	miedzyrzecz,
	sopot,
	gdynia,
	belchatow,
	cities,
	krakow,
	warszawa,
	katowice,
	opole,
	gdansk,
	bydgoszcz,
	gorzow,
	czestochowa,
	wroclaw,
	szczecin,
	rzeszow,
	kolobrzeg,
	poznan,
	allCitiesCounter
} from './cities';
// import steps from './steps';
// import steps from './steps';

// orgs
krakow.groups = [nsz, wod, rsz];
warszawa.groups = [aro, nsz];
katowice.groups = [fmw, rsa];
opole.groups = [twe];
gdansk.groups = [twe, nsz];
gorzow.groups = [twe, rsz];
bydgoszcz.groups = [aro];
czestochowa.groups = [aro, nsz];
wroclaw.groups = [fmw, nsz, aro];
szczecin.groups = [aro, fmw, rsz, twe];
rzeszow.groups = [twe];
kolobrzeg.groups = [];
poznan.groups = [];

/**
 * 1985
 * */
gorzow.actions_1985 = [];
gdansk.actions_1985 = [];
opole.actions_1985 = [];
katowice.actions_1985 = [];
krakow.actions_1985 = [action1, action3];
warszawa.actions_1985 = [action6, action7];
poznan.actions_1985 = [];
kolobrzeg.actions_1985 = [];
rzeszow.actions_1985 = [];
szczecin.actions_1985 = [];
wroclaw.actions_1985 = [action5];
czestochowa.actions_1985 = [];
machowa.actions_1985 = [action4];
miedzyrzecz.actions_1985 = [];
sopot.actions_1985 = [];
gdynia.actions_1985 = [];
belchatow.actions_1985 = [];
// action2, // Podkowa Leśna !!!

/**
 * 1986
 * */
krakow.actions_1986 = [action9, action15, action35];
warszawa.actions_1986 = [action10, action11, action22, action23, action24, action26, action32];
katowice.actions_1986 = [];
opole.actions_1986 = [];
gdansk.actions_1986 = [action31];
gorzow.actions_1986 = [];
bydgoszcz.actions_1986 = [action21, action27];
czestochowa.actions_1986 = [];
wroclaw.actions_1986 = [action14, action29, action30, action34];
szczecin.actions_1986 = [];
rzeszow.actions_1986 = [];
kolobrzeg.actions_1986 = [action19];
poznan.actions_1986 = [action36];
machowa.actions_1986 = [action13, action28];
miedzyrzecz.actions_1986 = [];
sopot.actions_1986 = [];
gdynia.actions_1986 = [action33];
belchatow.actions_1986 = [];
// action12 Podkowa Leśna !!!
/// action16 // Stargard Szczeciński
// action17 // Wejherowo
// action18 // Kielce
// action20, // Gniewowo
// action25 // Kopenhaga

/**
 * 1987
 * */
krakow.actions_1987 = [
	action40,
	action46,
	action49,
	action54,
	action66,
	action90,
	action96,
	action103,
	action120,
	action121,
	action140
];
warszawa.actions_1987 = [
	action52,
	action61,
	action63,
	action70,
	action88,
	action94,
	action104,
	action108,
	action112,
	action124,
	action132,
	action135
];
katowice.actions_1987 = [];
opole.actions_1987 = [action130, action132];
gdansk.actions_1987 = [
	action37,
	action41,
	action44,
	action48,
	action65,
	action71,
	action86,
	action97,
	action113,
	action128,
	action129,
	action132
];
gorzow.actions_1987 = [action64];
bydgoszcz.actions_1987 = [action84, action100, action142];
czestochowa.actions_1987 = [action104];
wroclaw.actions_1987 = [
	action370,
	action380,
	action39,
	action45,
	action53,
	action56,
	action58,
	action60,
	action73,
	action79,
	action85,
	action92,
	action93,
	action98,
	action105,
	action107,
	action115,
	action123,
	action133,
	action136,
	action139
];
szczecin.actions_1987 = [
	action42,
	action47,
	action51,
	action59,
	action99,
	action102,
	action145,
	action134,
	action137
];
rzeszow.actions_1987 = [];
kolobrzeg.actions_1987 = [action80, action111, action138];
poznan.actions_1987 = [action101, action131];
machowa.actions_1987 = [action116];
miedzyrzecz.actions_1987 = [action67, action72, action81, action82, action87, action91, action110];
sopot.actions_1987 = [action55, action62, action75, action113];
gdynia.actions_1987 = [action113, action122, action126];
belchatow.actions_1987 = [action114, action125];
// action68 // poland
// action69 // poland
// action38 // Bois, USA
// action43, // poland
// action50 // poland
// action57, // Siedlce
// action74, // Coventry
// action76, // Mokre
// action77,  // Olsztyn k. Częstochowy
// action78,  // Polska
// action83,  // Karkonosze
// action89, Biechów k. Wrześni
// ,// Międzyrzecz
// action95,  // usa
// action106, // Nikaragua
// action109, // Bytom
// action117, // Radom
// action118,  // Obrzycko, Luboszcz, Oborniki, Wronki
// action119, // Budapeszt
// action127, // Bruksela

/**
 * 1988
 * */
warszawa.actions_1988 = [];
krakow.actions_1988 = [];
katowice.actions_1988 = [];
opole.actions_1988 = [];
gdansk.actions_1988 = [];
gorzow.actions_1988 = [];
bydgoszcz.actions_1988 = [];
czestochowa.actions_1988 = [];
wroclaw.actions_1988 = [];
szczecin.actions_1988 = [];
rzeszow.actions_1988 = [];
kolobrzeg.actions_1988 = [];
poznan.actions_1988 = [];
machowa.actions_1988 = [];
miedzyrzecz.actions_1988 = [];
sopot.actions_1988 = [];
gdynia.actions_1988 = [];
belchatow.actions_1988 = [];

/**
 * 1989
 * */
krakow.actions_1989 = [];
warszawa.actions_1989 = [];
katowice.actions_1989 = [];
opole.actions_1989 = [];
gdansk.actions_1989 = [];
gorzow.actions_1989 = [];
bydgoszcz.actions_1989 = [];
czestochowa.actions_1989 = [];
wroclaw.actions_1989 = [];
szczecin.actions_1989 = [];
rzeszow.actions_1989 = [];
kolobrzeg.actions_1989 = [];
poznan.actions_1989 = [];
machowa.actions_1989 = [];
miedzyrzecz.actions_1989 = [];
sopot.actions_1989 = [];
gdynia.actions_1989 = [];
belchatow.actions_1989 = [];

/**
 * 1990
 * */
krakow.actions_1990 = [];
warszawa.actions_1990 = [];
katowice.actions_1990 = [];
opole.actions_1990 = [];
gdansk.actions_1990 = [];
gorzow.actions_1990 = [];
bydgoszcz.actions_1990 = [];
czestochowa.actions_1990 = [];
wroclaw.actions_1990 = [];
szczecin.actions_1990 = [];
rzeszow.actions_1990 = [];
kolobrzeg.actions_1990 = [];
poznan.actions_1990 = [];
machowa.actions_1990 = [];
miedzyrzecz.actions_1990 = [];
sopot.actions_1990 = [];
gdynia.actions_1990 = [];
belchatow.actions_1990 = [];

/**
 * 1991
 * */
krakow.actions_1991 = [];
warszawa.actions_1991 = [];
katowice.actions_1991 = [];
opole.actions_1991 = [];
gdansk.actions_1991 = [];
gorzow.actions_1991 = [];
bydgoszcz.actions_1991 = [];
czestochowa.actions_1991 = [];
wroclaw.actions_1991 = [];
szczecin.actions_1991 = [];
rzeszow.actions_1991 = [];
kolobrzeg.actions_1991 = [];
poznan.actions_1991 = [];
machowa.actions_1991 = [];
miedzyrzecz.actions_1991 = [];
sopot.actions_1991 = [];
gdynia.actions_1991 = [];
belchatow.actions_1991 = [];
kolobrzeg.actions_1991 = [];

/**
 * 1992
 * */
krakow.actions_1992 = [];
warszawa.actions_1992 = [];
katowice.actions_1992 = [];
opole.actions_1992 = [];
gdansk.actions_1992 = [];
gorzow.actions_1992 = [];
bydgoszcz.actions_1992 = [];
czestochowa.actions_1992 = [];
wroclaw.actions_1992 = [];
szczecin.actions_1992 = [];
rzeszow.actions_1992 = [];
kolobrzeg.actions_1992 = [];
poznan.actions_1992 = [];
machowa.actions_1992 = [];
miedzyrzecz.actions_1992 = [];
sopot.actions_1992 = [];
gdynia.actions_1992 = [];
belchatow.actions_1992 = [];

const actionsCounter = [
	{ text: 1985, count: records_1985.length, id: 1, anchor: '/#akcji-1985' },
	{ text: 1986, count: records_1986.length, id: 2, anchor: '/#akcji-1986' },
	{ text: 1987, count: records_1987.length, id: 3, anchor: '/#akcji-1987' },
	{ text: 1988, count: records_1988.length, id: 4, anchor: '/#akcji-1988' },
	{ text: 1989, count: records_1989.length, id: 5, anchor: '/#akcji-1989' },
	{ text: 1990, count: records_1990.length, id: 6, anchor: '/#akcji-1990' },
	{ text: 1991, count: records_1991.length, id: 7, anchor: '/#akcji-1991' },
	{ text: 1992, count: records_1991.length, id: 8, anchor: '/#akcji-1992' }
];

const stats = [
	{
		title: 'Miast',
		count: allCitiesCounter,
		img: '/images/'
	},
	{
		title: 'Akcji',
		count: allActionsCounter,
		img: '/images/stats_actions.png'
	},
	{
		title: 'Działacze',
		count: activistsListCount,
		img: '/images/stats_persons.png'
	},
	{
		title: 'Organizacji',
		count: allOrgsCounter,
		img: '/images/'
	}
];

export {
	allActionsCounter,

	// orgs
	localOrgs,
	worldwideOrgs,
	allOrgs,
	nsz,
	aro,
	fmw,
	rsa,
	rsz,
	twe,
	ch77,
	fpmb,
	wod,
	dzzsr,

	//
	navigation,
	navigationNgo,
	faq,

	// actions
	allYears,
	actionsCounter,
	records_1985,
	records_1986,
	records_1987,
	records_1988,
	records_1989,
	records_1990,
	records_1991,
	records_1992,

	// cities
	cities,
	krakow,
	warszawa,
	katowice,
	opole,
	gdansk,
	bydgoszcz,
	gorzow,
	czestochowa,
	wroclaw,
	szczecin,
	rzeszow,
	kolobrzeg,
	poznan,

	//
	partnersList,
	communityList,
	otherLinks,
	goals,
	activistsList,
	activistsListApp,
	activistsListCount,
	productslIst,
	stats,
	allOrgsCounter,
	allCitiesCounter
};
