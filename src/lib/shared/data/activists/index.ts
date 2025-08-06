import a from './a';
import b from './b';
import c from './c';
import d from './d';
import e from './e';
// import f from './f';
import g from './g';
// import h from './h';
import i from './i';
// import j from './j';
import k from './k';
import l from './l';
import ł from './ł';
import m from './m';
import n from './n';
// import o from './o';
import p from './p';
// import q from './q';
import r from './r';
import s from './s';
import t from './t';
import u from './u';
// import v from './v';
import w from './w';
// import x from './x';
// import y from './y';
// import z from './z';

// f, h, j, o, q, v,  x, y, z
const activistsList = [a, b, c, d, i, k, l, ł, m, n, p, r, s, t, u, w];
const activistsListApp = [].concat(
	a.data,
	b.data,
	c.data,
	d.data,
	i.data,
	k.data,
	l.data,
	ł.data,
	m.data,
	n.data,
	p.data,
	r.data,
	s.data,
	t.data,
	u.data,
	w.data
);

const activistsListCount = activistsListApp.length;

export { activistsList, activistsListApp, activistsListCount };
