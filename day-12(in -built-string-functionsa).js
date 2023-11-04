const t = 'eren hows you';
//x.indexof('letter')
console.log(t.indexOf('w'));
console.log(t.indexOf('e'));
//x.lastIndexof()
console.log(t.lastIndexOf('e'));
//x.slice(staring,ending)
console.log(t.slice(2));
console.log(t.slice(2, 4));
//x.tolowercase()
const q = 'WoeRTyio';
let t1 = q.toLowerCase();
console.log(t1);
//x.touppercase()
console.log(t1[0].toUpperCase() + t1.slice(1));
//x.trim()
const re = ' wowwman \n ';
console.log(re.trim());
//x.replace(old,new)
const st = 'wow man wow ';
console.log(st.replace('wow', 'nah'));
//x.replacceAll(olds,new)
console.log(st.replaceAll('wow', 'nah'));
//x.include('string')
const sw = ' we are here enjoying ,here';
console.log(sw.trim());
console.log(sw.includes('are'));
//x.startswith('string')
console.log(sw.startsWith('we'));
//x.endswith('string')
console.log(sw.endsWith('here'));
//x.split(' ')
const sq = 'taran singh aujla';
const [firstName, middleName, lastName] = sq.split(' ');
let rre = [firstName, middleName, lastName];
console.log(rre);
//x.join('')
console.log(rre.join(' '));
//x.padstart(20,'+')
//x.padend(10,'+')
let bank = 2010244820394;
bank = bank + ' ';
let yt = bank.slice(-4);
yt = yt.padStart(bank.length, '*');
console.log(yt);
