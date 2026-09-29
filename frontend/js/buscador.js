/* ============================================
   DATOS DE EJEMPLO — reemplazar por tu API
   ============================================ */
const CLIENTES = [
    { razon: '+RB INGENIERIA Y CONSTRUCCIÓN SPA', rut: '765928818', cdb: '5128671632', industria: 'Construcción', ejecutivo: 'Francisco Yovanolo', direccion: 'AV LAS CONDES 7700 OFICINA A910 PISO 9 TORRE A', comuna: 'LAS CONDES', unidades: 2, flotas: ['+RB INGENIERIA Y CONSTRUCCIÓN SPA'], connect: 0, civ: 50,
      contactos: [
        { nombre: 'Director de empresa', email: 'RBENITES@CRYB.CL', tel: '56986291406', principal: true },
        { nombre: 'Julio Daniel Cruzado Solano', email: 'jcruzado@cryb.cl', tel: '+56946976856' } ] },
    { razon: 'A & P INGENIERIA Y SERV LTDA', rut: '760642371', cdb: '5235872363', industria: 'Minería', ejecutivo: 'Isabel Del Piano', direccion: 'CAMINO A MINA 1200', comuna: 'CALAMA', unidades: 7, flotas: ['A & P INGENIERIA Y SERV LTDA'], connect: 57, civ: 29,
      contactos: [ { nombre: 'Director de empresa', email: 'contacto@aping.cl', tel: '56912345670', principal: true } ] },
    { razon: 'A Y A ROCHA LTDA', rut: '763894703', cdb: '5856025686', industria: 'Larga Distancia', ejecutivo: 'Francisco Yovanolo', direccion: 'RUTA 5 SUR KM 480', comuna: 'CHILLÁN', unidades: 1, flotas: ['A Y A ROCHA LTDA'], connect: 100, civ: 0,
      contactos: [ { nombre: 'Director de empresa', email: 'rocha@ayarocha.cl', tel: '56955501122', principal: true } ] },
    { razon: 'A. MONDACA MAQUINARIAS Y TRANSPORTES SPA', rut: '768777128', cdb: '8622638628', industria: 'Minería', ejecutivo: 'Isabel Del Piano', direccion: 'PARCELA 14 LOS ANDES', comuna: 'LOS ANDES', unidades: 8, flotas: ['A. MONDACA MAQUINARIAS Y TRANSPORTES SPA'], connect: 75, civ: 38,
      contactos: [ { nombre: 'Director de empresa', email: 'mondaca@amondaca.cl', tel: '56977712345', principal: true } ] },
    { razon: 'A.L.E. HEAVY LIFT CHILE SPA', rut: '765880890', cdb: '5263812266', industria: 'Minería', ejecutivo: 'Francisco Yovanolo', direccion: 'AV APOQUINDO 4501 OF 12', comuna: 'LAS CONDES', unidades: 2, flotas: ['A.L.E. HEAVY LIFT CHILE SPA'], connect: 50, civ: 0,
      contactos: [ { nombre: 'Director de empresa', email: 'admin@aleheavylift.cl', tel: '56922233344', principal: true } ] },
    { razon: 'ABDON ULISES ORTIZ TAPIA', rut: '103408822', cdb: '2320625048', industria: 'Distribución', ejecutivo: 'Isabel Del Piano', direccion: 'CALLE LARGA 55', comuna: 'RANCAGUA', unidades: 2, flotas: ['ABDON ULISES ORTIZ TAPIA'], connect: 0, civ: 0,
      contactos: [ { nombre: 'Abdón Ortiz', email: 'abdon.ortiz@gmail.com', tel: '56988877766', principal: true } ] },
    { razon: 'ABELARDO JULIO CUELLO', rut: '61312625', cdb: '8122325486', industria: 'Minería', ejecutivo: 'Francisco Yovanolo', direccion: 'PASAJE LOS PINOS 310', comuna: 'COPIAPÓ', unidades: 5, flotas: ['ABELARDO JULIO CUELLO'], connect: 60, civ: 20,
      contactos: [ { nombre: 'Abelardo Cuello', email: 'acuello@gmail.com', tel: '56911100099', principal: true } ] },
    { razon: 'WILSON ALFARO FORTIFICACIONES MINERAS EIRL', rut: '760717363', cdb: '1016860467', industria: 'Servicio', ejecutivo: 'Isabel Del Piano', direccion: 'DOLORES 3421 SANTO DOMINGO', comuna: 'LA SERENA', unidades: 1, flotas: ['WILSON ALFARO FORTIFICACIONES MINERAS EIRL'], connect: 100, civ: 0,
      contactos: [ { nombre: 'Director de empresa', email: 'Alphagerenciaoperaciones@gmail.com', tel: '56974966110', principal: true }, { nombre: 'Marco Alday', email: 'maldayk1971@gmail.com', tel: '+56995127270' } ] }
];

const FLOTAS = CLIENTES.map(c => ({ ...c, flota: c.flotas[0] }))
    .concat([
        { razon: 'TRANSPORTES SOTRASOL SOCIEDAD POR ACCIONES', rut: '768001359', cdb: '1011455165', industria: 'Larga Distancia', ejecutivo: 'Francisco Yovanolo', direccion: 'AV INDUSTRIAL 900', comuna: 'QUILICURA', unidades: 35, flotas: ['TRANSPORTES SOTRASOL SOCIEDAD POR ACCIONES'], connect: 86, civ: 40,
          contactos: [ { nombre: 'Director de empresa', email: 'gerencia@sotrasol.cl', tel: '56933344455', principal: true } ] },
        { razon: 'INVERSIONES SAN BERNARDO SPA', rut: '761847023', cdb: '1022612441', industria: 'Distribución', ejecutivo: 'Isabel Del Piano', direccion: 'SAN BERNARDO 150', comuna: 'SAN BERNARDO', unidades: 1, flotas: ['INVERSIONES SAN BERNARDO SPA'], connect: 0, civ: 0,
          contactos: [ { nombre: 'Director de empresa', email: 'info@invsanbernardo.cl', tel: '56966655544', principal: true } ] },
        { razon: 'CAMPOS Y CIA LTDA.', rut: '799229307', cdb: '1023318692', industria: 'Construcción', ejecutivo: 'Francisco Yovanolo', direccion: 'CAMINO LO ECHEVERS 800', comuna: 'QUILICURA', unidades: 2, flotas: ['CAMPOS Y CIA LTDA.'], connect: 50, civ: 50,
          contactos: [ { nombre: 'Director de empresa', email: 'campos@camposcia.cl', tel: '56944433322', principal: true } ] }
    ]);

const UNIDADES = [
    { razon: '+RB INGENIERIA Y CONSTRUCCIÓN SPA', rut: '765928818', cdb: '5128671632', industria: 'Construcción', vin: '93KKZ50A3SE202278', chasis: 'E202278', modelo: 'VM', estado: 'Desconectado', ejecutivo: 'Francisco Yovanolo', forma: 'Provision', servicio: 'Medio', comercial: 'Baja', inicio: '23-09-2025', duracion: '6', termino: '23-03-2026', periodo: 'mayo - 2025', entrega: '31-03-2025', flota: '+RB INGENIERIA Y CONSTRUCCIÓN SPA', flota2: '-' },
    { razon: '+RB INGENIERIA Y CONSTRUCCIÓN SPA', rut: '765928818', cdb: '5128671632', industria: 'Construcción', vin: '93KXG40G2SE612150', chasis: 'E612150', modelo: 'FMX', estado: 'Desconectado', ejecutivo: 'Francisco Yovanolo', forma: 'Provision', servicio: 'Medio', comercial: 'Baja', inicio: '10-10-2025', duracion: '6', termino: '10-04-2026', periodo: 'junio - 2025', entrega: '15-04-2025', flota: '+RB INGENIERIA Y CONSTRUCCIÓN SPA', flota2: '-' },
    { razon: 'A & P INGENIERIA Y SERV LTDA', rut: '760642371', cdb: '5235872363', industria: 'Minería', vin: '93KKYM0D9SE202707', chasis: 'E202707', modelo: 'FH', estado: 'No aplica', ejecutivo: 'Isabel Del Piano', forma: 'Venta', servicio: 'Alto', comercial: 'Activo', inicio: '01-03-2025', duracion: '12', termino: '01-03-2026', periodo: 'marzo - 2025', entrega: '20-02-2025', flota: 'A & P INGENIERIA Y SERV LTDA', flota2: '-' },
    { razon: 'A & P INGENIERIA Y SERV LTDA', rut: '760642371', cdb: '5235872363', industria: 'Minería', vin: '93KP0S1G1PE186796', chasis: 'E186796', modelo: 'FM', estado: 'No aplica', ejecutivo: 'Isabel Del Piano', forma: 'Venta', servicio: 'Alto', comercial: 'Activo', inicio: '01-03-2025', duracion: '12', termino: '01-03-2026', periodo: 'marzo - 2025', entrega: '20-02-2025', flota: 'A & P INGENIERIA Y SERV LTDA', flota2: '-' },
    { razon: 'A Y A ROCHA LTDA', rut: '763894703', cdb: '5856025686', industria: 'Larga Distancia', vin: '93KFH4X0PPE187321', chasis: 'E187321', modelo: 'FH', estado: 'Conectado', ejecutivo: 'Francisco Yovanolo', forma: 'Provision', servicio: 'Medio', comercial: 'Activo', inicio: '05-06-2025', duracion: '12', termino: '05-06-2026', periodo: 'abril - 2025', entrega: '30-04-2025', flota: 'A Y A ROCHA LTDA', flota2: '-' },
    { razon: 'A. MONDACA MAQUINARIAS Y TRANSPORTES SPA', rut: '768777128', cdb: '8622638628', industria: 'Minería', vin: '93KXG40G5RE611044', chasis: 'E611044', modelo: 'FMX', estado: 'Conectado', ejecutivo: 'Isabel Del Piano', forma: 'Venta', servicio: 'Alto', comercial: 'Activo', inicio: '12-01-2025', duracion: '24', termino: '12-01-2027', periodo: 'enero - 2025', entrega: '02-01-2025', flota: 'A. MONDACA MAQUINARIAS Y TRANSPORTES SPA', flota2: '-' },
    { razon: 'WILSON ALFARO FORTIFICACIONES MINERAS EIRL', rut: '760717363', cdb: '1016860467', industria: 'Servicio', vin: '93KKZ50A9RE198802', chasis: 'E198802', modelo: 'VM', estado: 'Conectado', ejecutivo: 'Isabel Del Piano', forma: 'Provision', servicio: 'Medio', comercial: 'Activo', inicio: '18-02-2025', duracion: '12', termino: '18-02-2026', periodo: 'febrero - 2025', entrega: '10-02-2025', flota: 'WILSON ALFARO FORTIFICACIONES MINERAS EIRL', flota2: '-' },
    { razon: 'ABELARDO JULIO CUELLO', rut: '61312625', cdb: '8122325486', industria: 'Minería', vin: '93KXG40G7SE612871', chasis: 'E612871', modelo: 'FMX', estado: 'Desconectado', ejecutivo: 'Francisco Yovanolo', forma: 'Provision', servicio: 'Bajo', comercial: 'Baja', inicio: '03-07-2025', duracion: '6', termino: '03-01-2026', periodo: 'mayo - 2025', entrega: '25-05-2025', flota: 'ABELARDO JULIO CUELLO', flota2: '-' }
];

/* ============================================
   CONFIGURACIÓN POR MODO
   ============================================ */
const MODES = {
    clientes: {
        data: CLIENTES, icon: 'bi-building', cols: 'minmax(24rem,2.6fr) 1fr 1fr 1.2fr',
        head: ['Razón social', 'RUT razón social', 'CDB', 'Industria'],
        cells: c => [c.rut, c.cdb, c.industria],
        detail: c => entityDetail(c, 'cliente')
    },
    flotas: {
        data: FLOTAS, icon: 'bi-diagram-3', cols: 'minmax(24rem,2.6fr) 1fr 1fr',
        head: ['Razón social', 'RUT razón social', 'CDB'],
        cells: c => [c.rut, c.cdb],
        detail: c => entityDetail(c, 'flota')
    },
    unidades: {
        data: UNIDADES, icon: 'bi-truck', cols: 'minmax(22rem,2.2fr) 1fr 1.6fr .9fr 1fr',
        head: ['Razón social', 'RUT razón social', 'VIN', 'Chasis', 'Estado'],
        cells: u => [u.rut, u.vin, u.chasis, badge(u.estado)],
        detail: unitDetail
    }
};

/* ============================================
   ESTADO Y UTILIDADES
   ============================================ */
const state = { mode: 'clientes', query: '', asc: true, selected: null };
const $ = s => document.querySelector(s);
const listEl = $('#list'), headEl = $('#listHead'), countEl = $('#resultCount');
const modal = $('#modal'), modalCard = $('#modalCard');
let lastFocus = null, currentRows = [];

const esc = s => String(s ?? '-').replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
const norm = s => String(s ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const initials = n => n.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();

function badge(estado) {
    const cls = { 'Conectado': 'badge-green', 'Desconectado': 'badge-red', 'No aplica': 'badge-amber' }[estado] || 'badge-neutral';
    return `<span class="badge ${cls}">${esc(estado)}</span>`;
}

/* ============================================
   LISTA
   ============================================ */
function render() {
    const cfg = MODES[state.mode];
    const q = norm(state.query.trim());

    currentRows = cfg.data
        .filter(r => !q || norm(Object.values(r).filter(v => typeof v !== 'object').join(' ')).includes(q))
        .sort((a, b) => a.razon.localeCompare(b.razon, 'es') * (state.asc ? 1 : -1));

    listEl.style.setProperty('--cols', cfg.cols);
    headEl.style.setProperty('--cols', cfg.cols);
    headEl.innerHTML = cfg.head.map(h => `<span>${h}</span>`).join('');
    countEl.textContent = `${currentRows.length} ${currentRows.length === 1 ? 'resultado' : 'resultados'}`;

    if (!currentRows.length) {
        listEl.innerHTML = `<div class="empty"><strong>Sin resultados</strong>Prueba con otra razón social, RUT o VIN.</div>`;
        return;
    }

    listEl.innerHTML = currentRows.map((r, i) => `
        <div class="row ${state.selected === r ? 'selected' : ''}" role="listitem" tabindex="0" data-i="${i}" style="--cols:${cfg.cols}">
            <div class="name"><i class="bi ${cfg.icon}"></i><span title="${esc(r.razon)}">${esc(r.razon)}</span></div>
            ${cfg.cells(r).map(c => `<div class="cell">${String(c).startsWith('<span') ? c : esc(c)}</div>`).join('')}
        </div>`).join('');
}

function select(row) {
    state.selected = currentRows[+row.dataset.i];
    listEl.querySelectorAll('.row.selected').forEach(el => el.classList.remove('selected'));
    row.classList.add('selected');
}

listEl.addEventListener('click', e => { const row = e.target.closest('.row'); if (row) select(row); });
listEl.addEventListener('dblclick', e => { const row = e.target.closest('.row'); if (row) { select(row); openDetail(); } });
listEl.addEventListener('keydown', e => { if (e.key === 'Enter') { const row = e.target.closest('.row'); if (row) { select(row); openDetail(); } } });

$('#searchInput').addEventListener('input', e => { state.query = e.target.value; render(); });

$('#modeTabs').addEventListener('click', e => {
    const btn = e.target.closest('.mode-tab');
    if (!btn) return;
    document.querySelectorAll('.mode-tab').forEach(b => b.classList.toggle('active', b === btn));
    state.mode = btn.dataset.mode;
    state.selected = null;
    render();
});

$('#sortBtn').addEventListener('click', () => {
    state.asc = !state.asc;
    $('#sortBtn i').className = `bi ${state.asc ? 'bi-sort-alpha-down' : 'bi-sort-alpha-up'}`;
    $('#sortBtn').title = state.asc ? 'Ordenar de A a Z' : 'Ordenar de Z a A';
    render();
});

/* ============================================
   MODAL
   ============================================ */
function openDetail() {
    if (!state.selected) return;
    lastFocus = document.activeElement;
    modalCard.innerHTML = MODES[state.mode].detail(state.selected);
    modal.hidden = false;
    document.body.classList.add('modal-open');
    $('#modalClose').focus();
}
function closeDetail() {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    if (lastFocus) lastFocus.focus();
}
$('#modalClose').addEventListener('click', closeDetail);
modal.addEventListener('mousedown', e => { if (e.target === modal) closeDetail(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeDetail(); });

modalCard.addEventListener('click', e => {
    const tab = e.target.closest('.tab');
    if (tab) {
        modalCard.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t === tab));
        modalCard.querySelectorAll('.pane').forEach(p => p.hidden = p.dataset.pane !== tab.dataset.tab);
        return;
    }
    if (e.target.closest('[data-goto]')) {
        const t = modalCard.querySelector(`.tab[data-tab="${e.target.closest('[data-goto]').dataset.goto}"]`);
        if (t) t.click();
    }
});

/* ============================================
   PLANTILLAS DE DETALLE
   ============================================ */
const kv = rows => `<ul class="kv">${rows.map(([k, v]) => `<li><span class="k">${k}</span><span class="v">${esc(v)}</span></li>`).join('')}</ul>`;

const contactHTML = c => `
    <div class="contact">
        <div class="avatar ${c.principal ? 'main' : ''}">${c.principal ? '<i class="bi bi-star-fill"></i>' : esc(initials(c.nombre))}</div>
        <div class="who"><b>${esc(c.nombre)}</b>
            <span><em style="font-style:normal"><i class="bi bi-envelope"></i>${esc(c.email)}</em><em style="font-style:normal"><i class="bi bi-telephone"></i>${esc(c.tel)}</em></span>
        </div>
    </div>`;

function entityDetail(c, tipo) {
    const units = UNIDADES.filter(u => u.rut === c.rut);
    const civ = c.civ ? `${c.civ}%` : '0%';
    return `
    <h2 class="d-title">${esc(c.razon)}</h2>
    <div class="d-meta"><span>Industria: <b>${esc(c.industria)}</b></span><span>RUT: <b>${esc(c.rut)}</b></span><span>CDB: <b>${esc(c.cdb)}</b></span></div>

    <div class="d-kpis">
        <div class="d-kpi"><div class="ico blue"><i class="bi bi-truck"></i></div><div><div class="lbl">Unidades totales</div><div class="val">${c.unidades}</div></div></div>
        <div class="d-kpi"><div class="ico green"><i class="bi bi-wifi"></i></div><div><div class="lbl">Volvo Connect</div><div class="val">${Math.round(c.unidades * c.connect / 100)}<small>(${c.connect}%)</small></div></div></div>
        <div class="d-kpi"><div class="ico amber"><i class="bi bi-camera-video-fill"></i></div><div><div class="lbl">CIV</div><div class="val">${Math.round(c.unidades * c.civ / 100)}<small>(${civ})</small></div></div></div>
        <div class="d-kpi"><div class="ico grey"><i class="bi bi-shield-check"></i></div><div><div class="lbl">Safety Zone</div><div class="val soon">Próximamente</div></div></div>
    </div>

    <div class="tabs" role="tablist">
        <button class="tab active" data-tab="resumen">Resumen</button>
        <button class="tab" data-tab="unidades">Unidades</button>
        <button class="tab" data-tab="contactos">Contactos</button>
    </div>

    <div class="pane" data-pane="resumen">
        <div class="d-cols">
            <div class="box">
                <div class="box-title">Información del ${tipo}</div>
                ${kv([
                    ['Razón social', c.razon], ['RUT', c.rut], ['CDB', c.cdb], ['Industria', c.industria],
                    ['Ejecutivo', c.ejecutivo], ['Dirección', c.direccion], ['Comuna', c.comuna],
                    ['Total de unidades', c.unidades], ['Flota(s)', c.flotas.join(', ')]
                ])}
            </div>
            <div class="box">
                <div class="box-title">Contactos encontrados <button class="link" data-goto="contactos">Ver todos (${c.contactos.length})</button></div>
                ${c.contactos.slice(0, 2).map(contactHTML).join('')}
            </div>
        </div>
    </div>

    <div class="pane" data-pane="unidades" hidden>
        <div class="box">
            <div class="box-title">Unidades registradas</div>
            ${units.length ? `<ul class="mini-list">${units.map(u => `<li><div><b>${esc(u.vin)}</b><small>Chasis ${esc(u.chasis)} · ${esc(u.modelo)}</small></div>${badge(u.estado)}</li>`).join('')}</ul>`
                           : `<p class="muted-note">No hay unidades de ejemplo asociadas a este ${tipo}.</p>`}
        </div>
    </div>

    <div class="pane" data-pane="contactos" hidden>
        <div class="box">
            <div class="box-title">Contactos (${c.contactos.length})</div>
            ${c.contactos.map(contactHTML).join('')}
        </div>
    </div>`;
}

function unitDetail(u) {
    const sec = (icon, title, rows, open = true) => `
        <details class="box" ${open ? 'open' : ''}>
            <summary><i class="bi ${icon} lead"></i>${title}<i class="bi bi-chevron-down chev"></i></summary>
            ${kv(rows)}
        </details>`;
    return `
    <h2 class="d-title">VIN ${esc(u.vin)}</h2>
    <div class="d-meta"><span>Razón social: <b>${esc(u.razon)}</b></span><span>Chasis: <b>${esc(u.chasis)}</b></span><span>${badge(u.estado)}</span></div>

    <div class="tabs" style="margin-top:2rem" role="tablist">
        <button class="tab active" data-tab="ficha">Ficha</button>
        <button class="tab" data-tab="historial">Historial</button>
    </div>

    <div class="pane" data-pane="ficha">
        <div class="d-cols">
            <div>
                ${sec('bi-building', 'Empresa', [['RUT', u.rut], ['Razón social', u.razon], ['CDB', u.cdb], ['Industria', u.industria]])}
                ${sec('bi-truck', 'Información de la unidad', [['VIN', u.vin], ['Chasis', u.chasis], ['Modelo', u.modelo]])}
            </div>
            <div>
                ${sec('bi-file-earmark-text', 'Información comercial', [
                    ['Ejecutivo', u.ejecutivo], ['Forma de contrato', u.forma], ['Tipo de servicio', u.servicio],
                    ['Estado comercial', u.comercial], ['Inicio contrato', u.inicio], ['Duración (meses)', u.duracion],
                    ['Término contrato', u.termino], ['Periodo interno', u.periodo], ['Estado de entrega', u.entrega]])}
                ${sec('bi-gear-wide-connected', 'Información operativa', [['Flota VC', u.flota], ['Flota VC 2', u.flota2]])}
            </div>
        </div>
    </div>

    <div class="pane" data-pane="historial" hidden>
        <div class="box">
            <div class="box-title">Historial de la unidad</div>
            <ul class="timeline">
                <li><b>Inicio de contrato</b><span>${esc(u.inicio)}</span></li>
                <li><b>Entrega de la unidad</b><span>${esc(u.entrega)}</span></li>
                <li><b>Estado comercial: ${esc(u.comercial)}</b><span>Actualizado con el último periodo (${esc(u.periodo)})</span></li>
                <li><b>Término de contrato</b><span>${esc(u.termino)}</span></li>
            </ul>
        </div>
    </div>`;
}

render();
