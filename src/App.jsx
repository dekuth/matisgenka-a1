import { useState, useMemo, useRef, useEffect } from 'react';
import { LISTA_PPT } from './data/audios';

const FRASES_MATSIGENKA = [
  { vocablo: 'Katingaro', traduccion: 'Buenos días / Saludo diurno', fonetica: '[ka.ti.ŋa.ɾo]' },
  { vocablo: 'Inchatoshi', traduccion: 'El bosque / La selva amazónica', fonetica: '[in.tʃa.to.ʃi]' },
  { vocablo: 'Niagantsi', traduccion: 'Nuestra lengua / Palabra hablada', fonetica: '[ni.a.ɣan.tsi]' },
  { vocablo: 'Tasorintsi', traduccion: 'Gracias / Espíritu creador', fonetica: '[ta.so.ɾin.tsi]' },
];

// ============================================================================
// COMPONENTE EXTERNO: MENÚ LATERAL (Índice con Unidad y Subnivel resaltados)
// ============================================================================
function SidebarContent({ 
  esMovil = false, 
  filtroActivo, 
  setFiltroActivo, 
  unidadActivaMenu, 
  subnivelActivoMenu, 
  unidadesAbiertas, 
  toggleUnidad, 
  subnivelesAbiertos, 
  toggleSubnivel, 
  setMenuMovilAbierto 
}) {
  return (
    <>
      <div>
        <div className="pplx-brand-header">
          <div className="pplx-brand-mark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
              <path d="M8 7h6" />
              <path d="M8 11h8" />
            </svg>
            <span className="pplx-brand-title">Nivel A1</span>
          </div>
          {esMovil ? (
            <button
              onClick={() => setMenuMovilAbierto(false)}
              style={{ background: 'none', border: 'none', fontSize: '18px', color: 'var(--color-graphite)', cursor: 'pointer' }}
            >
              ✕
            </button>
          ) : (
            <span className="pplx-badge-teal">UNMSM</span>
          )}
        </div>

        <button
          onClick={() => {
            setFiltroActivo('todas');
            if (esMovil) setMenuMovilAbierto(false);
          }}
          className={`pplx-nav-item ${filtroActivo === 'todas' ? 'active' : ''}`}
          style={{ marginBottom: '14px', fontWeight: 600 }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>
            Catálogo Completo (PPT 1–64)
          </span>
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          
          {/* ================= UNIDAD 1 ================= */}
          <div className="pplx-tree-unidad">
            <div 
              onClick={() => toggleUnidad('U1')}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: '7px 10px', 
                cursor: 'pointer', 
                fontWeight: 600, 
                fontSize: '13px',
                color: unidadActivaMenu === 'Unidad 1' ? 'var(--color-deep-teal)' : 'var(--color-ink)'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                Unidad 1
              </span>
              <span style={{ fontSize: '11px', color: unidadActivaMenu === 'Unidad 1' ? 'var(--color-deep-teal)' : 'var(--color-graphite)' }}>{unidadesAbiertas.U1 ? '▼' : '▶'}</span>
            </div>

            {unidadesAbiertas.U1 && (
              <div style={{ marginLeft: '10px', borderLeft: '1px solid var(--color-warm-mist)', paddingLeft: '8px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                
                {/* Subnivel A1.1 */}
                <div>
                  <div 
                    onClick={() => toggleSubnivel('A1.1')}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between', 
                      padding: '5px 8px', 
                      cursor: 'pointer', 
                      fontSize: '12px', 
                      fontWeight: 600, 
                      color: subnivelActivoMenu === 'A1.1' ? 'var(--color-deep-teal)' : 'var(--color-graphite)'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                      Subnivel A1.1
                    </span>
                    <span style={{ fontSize: '10px', padding: '2px 4px', color: subnivelActivoMenu === 'A1.1' ? 'var(--color-deep-teal)' : 'inherit' }}>{subnivelesAbiertos['A1.1'] ? '▼' : '▶'}</span>
                  </div>

                  {subnivelesAbiertos['A1.1'] && (
                    <div style={{ marginLeft: '8px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ fontSize: '11px', color: 'var(--color-graphite)', fontWeight: 500, padding: '2px 4px' }}>Primera parte (PPT 1–8)</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginLeft: '6px' }}>
                        {Array.from({ length: 8 }, (_, i) => i + 1).map(n => {
                          const pId = `PPT ${n}`;
                          const activo = filtroActivo === pId;
                          return (
                            <button
                              key={pId}
                              onClick={() => { setFiltroActivo(pId); if (esMovil) setMenuMovilAbierto(false); }}
                              className={`pplx-nav-item ${activo ? 'active' : ''}`}
                              style={{ fontSize: '11.5px', padding: '4px 8px' }}
                            >
                              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                                {pId}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      <div style={{ fontSize: '11px', color: 'var(--color-graphite)', fontWeight: 500, padding: '4px 4px 2px 4px', marginTop: '4px' }}>Segunda parte (PPT 9–16)</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginLeft: '6px' }}>
                        {Array.from({ length: 8 }, (_, i) => i + 9).map(n => {
                          const pId = `PPT ${n}`;
                          const activo = filtroActivo === pId;
                          return (
                            <button
                              key={pId}
                              onClick={() => { setFiltroActivo(pId); if (esMovil) setMenuMovilAbierto(false); }}
                              className={`pplx-nav-item ${activo ? 'active' : ''}`}
                              style={{ fontSize: '11.5px', padding: '4px 8px' }}
                            >
                              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                                {pId}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Subnivel A1.2 */}
                <div>
                  <div 
                    onClick={() => toggleSubnivel('A1.2')}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between', 
                      padding: '5px 8px', 
                      cursor: 'pointer', 
                      fontSize: '12px', 
                      fontWeight: 600, 
                      color: subnivelActivoMenu === 'A1.2' ? 'var(--color-deep-teal)' : 'var(--color-graphite)'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                      Subnivel A1.2 (PPT 17–32)
                    </span>
                    <span style={{ fontSize: '10px', padding: '2px 4px', color: subnivelActivoMenu === 'A1.2' ? 'var(--color-deep-teal)' : 'inherit' }}>{subnivelesAbiertos['A1.2'] ? '▼' : '▶'}</span>
                  </div>

                  {subnivelesAbiertos['A1.2'] && (
                    <div style={{ marginLeft: '8px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '2px', marginLeft: '12px' }}>
                      {Array.from({ length: 16 }, (_, i) => i + 17).map(n => {
                        const pId = `PPT ${n}`;
                        const activo = filtroActivo === pId;
                        return (
                          <button
                            key={pId}
                            onClick={() => { setFiltroActivo(pId); if (esMovil) setMenuMovilAbierto(false); }}
                            className={`pplx-nav-item ${activo ? 'active' : ''}`}
                            style={{ fontSize: '11.5px', padding: '4px 8px' }}
                          >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                              {pId}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>

          {/* ================= UNIDAD 2 ================= */}
          <div className="pplx-tree-unidad">
            <div 
              onClick={() => toggleUnidad('U2')}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: '7px 10px', 
                cursor: 'pointer', 
                fontWeight: 600, 
                fontSize: '13px',
                color: unidadActivaMenu === 'Unidad 2' ? 'var(--color-deep-teal)' : 'var(--color-ink)'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                Unidad 2
              </span>
              <span style={{ fontSize: '11px', color: unidadActivaMenu === 'Unidad 2' ? 'var(--color-deep-teal)' : 'var(--color-graphite)' }}>{unidadesAbiertas.U2 ? '▼' : '▶'}</span>
            </div>

            {unidadesAbiertas.U2 && (
              <div style={{ marginLeft: '10px', borderLeft: '1px solid var(--color-warm-mist)', paddingLeft: '8px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                
                {/* Subnivel A1.3 */}
                <div>
                  <div 
                    onClick={() => toggleSubnivel('A1.3')}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between', 
                      padding: '5px 8px', 
                      cursor: 'pointer', 
                      fontSize: '12px', 
                      fontWeight: 600, 
                      color: subnivelActivoMenu === 'A1.3' ? 'var(--color-deep-teal)' : 'var(--color-graphite)'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                      Subnivel A1.3 (PPT 33–48)
                    </span>
                    <span style={{ fontSize: '10px', padding: '2px 4px', color: subnivelActivoMenu === 'A1.3' ? 'var(--color-deep-teal)' : 'inherit' }}>{subnivelesAbiertos['A1.3'] ? '▼' : '▶'}</span>
                  </div>
                  {subnivelesAbiertos['A1.3'] && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginLeft: '12px', marginTop: '4px' }}>
                      {Array.from({ length: 16 }, (_, i) => i + 33).map(n => {
                        const pId = `PPT ${n}`;
                        const activo = filtroActivo === pId;
                        return (
                          <button
                            key={pId}
                            onClick={() => { setFiltroActivo(pId); if (esMovil) setMenuMovilAbierto(false); }}
                            className={`pplx-nav-item ${activo ? 'active' : ''}`}
                            style={{ fontSize: '11.5px', padding: '4px 8px' }}
                          >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                              {pId}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Subnivel A1.4 */}
                <div>
                  <div 
                    onClick={() => toggleSubnivel('A1.4')}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between', 
                      padding: '5px 8px', 
                      cursor: 'pointer', 
                      fontSize: '12px', 
                      fontWeight: 600, 
                      color: subnivelActivoMenu === 'A1.4' ? 'var(--color-deep-teal)' : 'var(--color-graphite)'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                      Subnivel A1.4 (PPT 49–64)
                    </span>
                    <span style={{ fontSize: '10px', padding: '2px 4px', color: subnivelActivoMenu === 'A1.4' ? 'var(--color-deep-teal)' : 'inherit' }}>{subnivelesAbiertos['A1.4'] ? '▼' : '▶'}</span>
                  </div>
                  {subnivelesAbiertos['A1.4'] && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginLeft: '12px', marginTop: '4px' }}>
                      {Array.from({ length: 16 }, (_, i) => i + 49).map(n => {
                        const pId = `PPT ${n}`;
                        const activo = filtroActivo === pId;
                        return (
                          <button
                            key={pId}
                            onClick={() => { setFiltroActivo(pId); if (esMovil) setMenuMovilAbierto(false); }}
                            className={`pplx-nav-item ${activo ? 'active' : ''}`}
                            style={{ fontSize: '11.5px', padding: '4px 8px' }}
                          >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                              {pId}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>
        </div>
      </div>

      <div className="pplx-sidebar-footer">
        <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-ink)' }}>
          CEID • UNMSM
        </span>
        <span style={{ fontSize: '11px', color: 'var(--color-graphite)' }}>
          Facultad de Letras y Ciencias Humanas
        </span>
      </div>
    </>
  );
}

// ============================================================================
// COMPONENTE PRINCIPAL: APP
// ============================================================================
export default function App() {
  const [alumno, setAlumno] = useState(() => {
    try {
      const saved = localStorage.getItem('matsigenka_alumno');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (alumno) {
        localStorage.setItem('matsigenka_alumno', JSON.stringify(alumno));
      } else {
        localStorage.removeItem('matsigenka_alumno');
      }
    } catch (e) {
      console.error(e);
    }
  }, [alumno]);

  const [audiosCompletados, setAudiosCompletados] = useState(() => {
    try {
      const saved = localStorage.getItem('matsigenka_audios_completados');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('matsigenka_audios_completados', JSON.stringify(audiosCompletados));
    } catch (e) {
      console.error(e);
    }
  }, [audiosCompletados]);

  const [dni, setDni] = useState('');
  const [errorLogin, setErrorLogin] = useState('');
  const [cargando, setCargando] = useState(false);

  const [indiceFrase, setIndiceFrase] = useState(0);

  // Navegación
  const [filtroActivo, setFiltroActivo] = useState('todas');
  const [busqueda, setBusqueda] = useState('');
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);
  const [sidebarColapsado, setSidebarColapsado] = useState(false);
  const [cuentaAbierta, setCuentaAbierta] = useState(false);
  const cuentaRef = useRef(null);

  // Acordeones abiertos (inician ocultos)
  const [unidadesAbiertas, setUnidadesAbiertas] = useState({ U1: false, U2: false });
  const [subnivelesAbiertos, setSubnivelesAbiertos] = useState({ 'A1.1': false, 'A1.2': false, 'A1.3': false, 'A1.4': false });

  // Reproductor
  const [pptReproduciendo, setPptReproduciendo] = useState(null);
  const [indicePistaActual, setIndicePistaActual] = useState(0);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [tiempoActual, setTiempoActual] = useState(0);
  const [duracionTotal, setDuracionTotal] = useState(0);
  const [velocidad, setVelocidad] = useState(1);
  const audioRef = useRef(null);

  const dnisValidos = ['70123456', '72819203', '45829104', '71234567'];

  useEffect(() => {
    if (alumno) return;
    const intervalo = setInterval(() => {
      setIndiceFrase((prev) => (prev + 1) % FRASES_MATSIGENKA.length);
    }, 3800);
    return () => clearInterval(intervalo);
  }, [alumno]);

  useEffect(() => {
    function manejarClickFuera(e) {
      if (cuentaRef.current && !cuentaRef.current.contains(e.target)) {
        setCuentaAbierta(false);
      }
    }
    document.addEventListener('mousedown', manejarClickFuera);
    return () => document.removeEventListener('mousedown', manejarClickFuera);
  }, []);

  const validarAccesoDni = (e) => {
    e.preventDefault();
    setErrorLogin('');

    if (dni.length !== 8 || isNaN(dni)) {
      setErrorLogin('Ingresa un número de DNI válido de 8 dígitos.');
      return;
    }

    setCargando(true);
    setTimeout(() => {
      if (dnisValidos.includes(dni)) {
        setAlumno({ dni });
      } else {
        setErrorLogin('El DNI ingresado no se encuentra registrado.');
      }
      setCargando(false);
    }, 350);
  };

  const pptSeleccionadaObj = useMemo(() => {
    if (filtroActivo.startsWith('PPT')) {
      return LISTA_PPT.find(p => p.id === filtroActivo);
    }
    return null;
  }, [filtroActivo]);

  // Sincronización automática de acordeones al seleccionar una PPT
  useEffect(() => {
    if (pptSeleccionadaObj) {
      if (pptSeleccionadaObj.unidad === 'Unidad 1') {
        setUnidadesAbiertas(prev => ({ ...prev, U1: true }));
        if (pptSeleccionadaObj.subnivel.includes('A1.1')) {
          setSubnivelesAbiertos(prev => ({ ...prev, 'A1.1': true }));
        } else if (pptSeleccionadaObj.subnivel.includes('A1.2')) {
          setSubnivelesAbiertos(prev => ({ ...prev, 'A1.2': true }));
        }
      } else if (pptSeleccionadaObj.unidad === 'Unidad 2') {
        setUnidadesAbiertas(prev => ({ ...prev, U2: true }));
        if (pptSeleccionadaObj.subnivel.includes('A1.3')) {
          setSubnivelesAbiertos(prev => ({ ...prev, 'A1.3': true }));
        } else if (pptSeleccionadaObj.subnivel.includes('A1.4')) {
          setSubnivelesAbiertos(prev => ({ ...prev, 'A1.4': true }));
        }
      }
    }
  }, [pptSeleccionadaObj]);

  // Detecta la unidad activa en el menú izquierdo según la PPT o el filtro central
  const unidadActivaMenu = useMemo(() => {
    if (pptSeleccionadaObj) return pptSeleccionadaObj.unidad;
    if (filtroActivo === 'Unidad 1') return 'Unidad 1';
    if (filtroActivo === 'Unidad 2') return 'Unidad 2';
    return '';
  }, [pptSeleccionadaObj, filtroActivo]);

  // Detecta el subnivel activo en el menú izquierdo según la PPT seleccionada
  const subnivelActivoMenu = useMemo(() => {
    if (pptSeleccionadaObj) {
      if (pptSeleccionadaObj.subnivel.includes('A1.1')) return 'A1.1';
      if (pptSeleccionadaObj.subnivel.includes('A1.2')) return 'A1.2';
      if (pptSeleccionadaObj.subnivel.includes('A1.3')) return 'A1.3';
      if (pptSeleccionadaObj.subnivel.includes('A1.4')) return 'A1.4';
    }
    return '';
  }, [pptSeleccionadaObj]);

  // Determina cuál botón de la barra superior central debe pintarse como activo
  const chipActivoCentral = useMemo(() => {
    if (filtroActivo === 'Unidad 1') return 'Unidad 1';
    if (filtroActivo === 'Unidad 2') return 'Unidad 2';
    if (pptSeleccionadaObj) return pptSeleccionadaObj.unidad;
    return 'todas';
  }, [filtroActivo, pptSeleccionadaObj]);

  // BÚSQUEDA INTELIGENTE GLOBAL Y FILTRADO
  const pptsFiltradas = useMemo(() => {
    const q = busqueda.toLowerCase().trim();

    return LISTA_PPT.filter((item) => {
      let coincideFiltroMenu = true;
      if (filtroActivo !== 'todas') {
        if (filtroActivo.startsWith('PPT')) {
          coincideFiltroMenu = item.id === filtroActivo;
        } else if (filtroActivo === 'Unidad 1') {
          coincideFiltroMenu = item.unidad === 'Unidad 1';
        } else if (filtroActivo === 'Unidad 2') {
          coincideFiltroMenu = item.unidad === 'Unidad 2';
        }
      }

      if (!coincideFiltroMenu) return false;
      if (!q) return true;

      const coincideCabecera =
        item.id.toLowerCase().includes(q) ||
        item.titulo.toLowerCase().includes(q) ||
        item.tema.toLowerCase().includes(q);

      if (coincideCabecera) return true;

      const coincideAudios = item.audios && item.audios.some(audio => 
        String(audio.num).includes(q) ||
        audio.diapositiva.toLowerCase().includes(q) ||
        (audio.funcion && audio.funcion.toLowerCase().includes(q)) ||
        audio.desc.toLowerCase().includes(q)
      );

      return coincideAudios;
    });
  }, [filtroActivo, busqueda]);

  // Navegación lineal entre lecciones (PPT Anterior y PPT Siguiente)
  const indicesPPTsDisponibles = useMemo(() => {
    return LISTA_PPT.map((p, index) => ({ id: p.id, index })).filter(p => {
      const item = LISTA_PPT[p.index];
      if (filtroActivo === 'Unidad 1' || filtroActivo === 'Unidad 2') {
        return item.unidad === filtroActivo;
      }
      return true;
    });
  }, [filtroActivo]);

  const navegacionLinealPPT = useMemo(() => {
    if (!filtroActivo.startsWith('PPT')) return { anterior: null, siguiente: null };
    const posEnFiltradas = indicesPPTsDisponibles.findIndex(p => p.id === filtroActivo);
    if (posEnFiltradas === -1) return { anterior: null, siguiente: null };

    const anterior = posEnFiltradas > 0 ? indicesPPTsDisponibles[posEnFiltradas - 1].id : null;
    const siguiente = posEnFiltradas < indicesPPTsDisponibles.length - 1 ? indicesPPTsDisponibles[posEnFiltradas + 1].id : null;
    return { anterior, siguiente };
  }, [filtroActivo, indicesPPTsDisponibles]);

  const pistaActual = useMemo(() => {
    if (!pptReproduciendo || !pptReproduciendo.audios.length) return null;
    return pptReproduciendo.audios[indicePistaActual] || pptReproduciendo.audios[0];
  }, [pptReproduciendo, indicePistaActual]);

  const tieneAnterior = pptReproduciendo && indicePistaActual > 0;
  const tieneSiguiente =
    pptReproduciendo && indicePistaActual < pptReproduciendo.audios.length - 1;

  const irPistaAnterior = () => {
    if (tieneAnterior) {
      setIndicePistaActual((prev) => prev - 1);
      setReproduciendo(true);
    }
  };

  const irPistaSiguiente = () => {
    if (tieneSiguiente) {
      setIndicePistaActual((prev) => prev + 1);
      setReproduciendo(true);
    } else {
      setReproduciendo(false);
    }
  };

  const seleccionarAudioIndividual = (pptItem, indexPista) => {
    if (!pptItem.disponible) return;
    setPptReproduciendo(pptItem);
    setIndicePistaActual(indexPista);
    setReproduciendo(true);
  };

  const alternarPlayPause = () => {
    if (!audioRef.current) return;
    if (reproduciendo) {
      audioRef.current.pause();
      setReproduciendo(false);
    } else {
      audioRef.current.play();
      setReproduciendo(true);
    }
  };

  useEffect(() => {
    if (audioRef.current && pistaActual) {
      audioRef.current.playbackRate = velocidad;
      if (reproduciendo) {
        audioRef.current.play().catch(() => setReproduciendo(false));
      }
    }
  }, [pistaActual, velocidad]);

  const marcarAudioComoCompletado = () => {
    if (!pptReproduciendo || !pistaActual) return;
    const clave = `${pptReproduciendo.id}_${pistaActual.num}`;
    setAudiosCompletados(prev => ({ ...prev, [clave]: true }));
  };

  const formatearTiempo = (seg) => {
    if (isNaN(seg) || seg === 0) return '00:00';
    const m = Math.floor(seg / 60);
    const s = Math.floor(seg % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const cambiarVelocidad = () => {
    const lista = [1, 1.25, 1.5, 2];
    const sig = lista[(lista.indexOf(velocidad) + 1) % lista.length];
    setVelocidad(sig);
  };

  const toggleUnidad = (uId) => {
    setUnidadesAbiertas(prev => ({ ...prev, [uId]: !prev[uId] }));
  };

  const toggleSubnivel = (subId) => {
    setSubnivelesAbiertos(prev => ({ ...prev, [subId]: !prev[subId] }));
  };

  // 1. LOGIN CON ATMÓSFERA AMAZÓNICA MATSIGENKA
  if (!alumno) {
    const fraseActual = FRASES_MATSIGENKA[indiceFrase];

    return (
      <div 
        className="portal-login-screen"
        style={{
          background: 'linear-gradient(180deg, #07221d 0%, #0f4c3a 42%, #9e5a34 78%, #e29552 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="portal-stars"></div>

        <header className="portal-top-nav">
          <div className="portal-brand">
            <div 
              className="portal-brand-icon"
              style={{ color: '#0f4c3a', backgroundColor: '#ffffff' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span>CEID Matsigenka</span>
          </div>

          <div className="portal-nav-pills">
            <span 
              className="portal-nav-pill"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.14)', borderColor: 'rgba(255, 255, 255, 0.25)' }}
            >
              Manual Sonoro
            </span>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.92)', padding: '0 10px', fontWeight: 500 }}>UNMSM</span>
          </div>
        </header>

        <div className="portal-center-stack">
          <div className="portal-hero-center">
            <h1 className="portal-serif-title" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)' }}>
              Plataforma sonora Matsigenka.<br />
              Del texto fonético al diálogo vivo.
            </h1>
            <p className="portal-subtitle" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Escucha la pronunciación auténtica de los sabios del Urubamba<br />
              y practica las lecciones oficiales desde cualquier dispositivo.
            </p>
            <div 
              className="portal-pill-badge" 
              style={{ marginTop: '8px', color: '#0f4c3a', backgroundColor: '#ffffff', boxShadow: '0 6px 20px rgba(0,0,0,0.18)' }}
            >
              <span>🎧 Edición Académica 2026</span>
            </div>
          </div>

          <div 
            className="portal-glass-frame" 
            style={{ 
              maxWidth: '880px', 
              margin: '0 auto',
              background: 'rgba(255, 255, 255, 0.22)',
              borderColor: 'rgba(255, 255, 255, 0.38)',
              boxShadow: '0 24px 60px rgba(4, 20, 16, 0.45)'
            }}
          >
            <div className="portal-window-inner" style={{ padding: '36px' }}>
              <div className="portal-window-topbar" style={{ marginBottom: '28px' }}>
                <div className="portal-student-head">
                  <div className="portal-avatar-dot" style={{ backgroundColor: '#0f4c3a' }}>M</div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-ink)' }}>
                      Centro de Idiomas UNMSM
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--color-graphite)' }}>
                      Repositorio de Audios • Lenguas Originarias
                    </div>
                  </div>
                </div>
                <span className="pplx-badge-teal" style={{ backgroundColor: '#0f4c3a' }}>Acceso Estudiante</span>
              </div>

              <div className="portal-window-grid" style={{ gap: '36px', alignItems: 'center' }}>
                <div className="portal-login-card" style={{ padding: 0, background: 'transparent', boxShadow: 'none', border: 'none' }}>
                  <h2 className="portal-card-serif-heading" style={{ fontSize: '20px', marginBottom: '20px' }}>
                    Ingreso a los recursos audiovisuales
                  </h2>

                  <form onSubmit={validarAccesoDni}>
                    <label className="portal-input-label" style={{ marginBottom: '10px', display: 'block' }}>NÚMERO DE DNI</label>
                    <input
                      type="text"
                      maxLength={8}
                      placeholder="Ingresa tus 8 dígitos (ej. 70123456)"
                      value={dni}
                      onChange={(e) => setDni(e.target.value.replace(/\D/g, ''))}
                      className="portal-dni-input"
                      style={{ marginBottom: '16px', borderColor: '#cbd5e1' }}
                      autoFocus
                    />

                    {errorLogin && (
                      <p style={{ color: 'var(--color-error)', fontSize: '12px', marginBottom: '12px', fontWeight: 500 }}>
                        {errorLogin}
                      </p>
                    )}

                    <button 
                      type="submit" 
                      disabled={cargando} 
                      className="portal-submit-btn"
                      style={{ 
                        background: 'linear-gradient(135deg, #0f4c3a 0%, #15654e 100%)',
                        boxShadow: '0 6px 16px rgba(15, 76, 58, 0.3)'
                      }}
                    >
                      {cargando ? 'Verificando acceso...' : 'Ingresar al Libro Sonoro →'}
                    </button>
                  </form>
                </div>

                <div
                  className="portal-side-interactive"
                  onClick={() => setIndiceFrase((prev) => (prev + 1) % FRASES_MATSIGENKA.length)}
                  style={{
                    background: 'linear-gradient(145deg, #07221d 0%, #0d382e 100%)',
                    borderColor: 'rgba(52, 211, 153, 0.22)'
                  }}
                >
                  <div 
                    className="interactive-glow-orb"
                    style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, transparent 70%)' }}
                  ></div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}>
                    <span style={{ fontSize: '11px', color: '#fbbf24', fontWeight: 600, letterSpacing: '0.06em' }}>
                      FONÉTICA VIVA • URUBAMBA
                    </span>

                    <div className="soundwave-box">
                      <span className="wave-bar" style={{ animationDelay: '0.1s', backgroundColor: '#34d399' }}></span>
                      <span className="wave-bar" style={{ animationDelay: '0.3s', backgroundColor: '#34d399' }}></span>
                      <span className="wave-bar" style={{ animationDelay: '0.0s', backgroundColor: '#34d399' }}></span>
                      <span className="wave-bar" style={{ animationDelay: '0.4s', backgroundColor: '#34d399' }}></span>
                      <span className="wave-bar" style={{ animationDelay: '0.2s', backgroundColor: '#34d399' }}></span>
                    </div>
                  </div>

                  <div 
                    className="interactive-word-pill" 
                    style={{ 
                      position: 'relative', 
                      zIndex: 2,
                      background: 'rgba(255, 255, 255, 0.06)',
                      borderColor: 'rgba(255, 255, 255, 0.14)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <strong style={{ fontFamily: 'var(--font-ibm-plex-serif)', fontSize: '20px', fontWeight: 400, color: '#ffffff' }}>
                        “{fraseActual.vocablo}”
                      </strong>
                      <span style={{ fontFamily: 'var(--font-ui-monospace)', fontSize: '11px', color: '#6ee7b7' }}>
                        {fraseActual.fonetica}
                      </span>
                    </div>
                    <p style={{ fontSize: '12px', color: '#d1fae5', marginTop: '6px', opacity: 0.85 }}>
                      {fraseActual.traduccion}
                    </p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: '#a7f3d0', opacity: 0.75, position: 'relative', zIndex: 2 }}>
                    <span>Toca para cambiar vocablo ↻</span>
                    <span>{indiceFrase + 1} / {FRASES_MATSIGENKA.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <svg className="portal-mountains-svg" viewBox="0 0 1440 220" preserveAspectRatio="none">
          <path fill="rgba(9, 38, 30, 0.65)" d="M0,140L120,115C240,90,480,40,720,55C960,70,1200,150,1320,180L1440,210L1440,220L0,220Z"></path>
          <path fill="rgba(4, 20, 16, 0.92)" d="M0,175L96,160C192,145,384,115,576,120C768,125,960,165,1152,175C1344,185,1392,170,1440,160L1440,220L0,220Z"></path>
        </svg>
      </div>
    );
  }

  // 2. EBOOK INTERIOR
  return (
    <div className="pplx-layout">
      {!sidebarColapsado && (
        <aside className="pplx-sidebar">
          <SidebarContent 
            esMovil={false}
            filtroActivo={filtroActivo}
            setFiltroActivo={setFiltroActivo}
            unidadActivaMenu={unidadActivaMenu}
            subnivelActivoMenu={subnivelActivoMenu}
            unidadesAbiertas={unidadesAbiertas}
            toggleUnidad={toggleUnidad}
            subnivelesAbiertos={subnivelesAbiertos}
            toggleSubnivel={toggleSubnivel}
            setMenuMovilAbierto={setMenuMovilAbierto}
          />
        </aside>
      )}

      {menuMovilAbierto && (
        <div className="pplx-drawer-backdrop" onClick={() => setMenuMovilAbierto(false)}></div>
      )}
      <aside className={`pplx-mobile-drawer ${menuMovilAbierto ? 'open' : ''}`}>
        <SidebarContent 
          esMovil={true}
          filtroActivo={filtroActivo}
          setFiltroActivo={setFiltroActivo}
          unidadActivaMenu={unidadActivaMenu}
          subnivelActivoMenu={subnivelActivoMenu}
          unidadesAbiertas={unidadesAbiertas}
          toggleUnidad={toggleUnidad}
          subnivelesAbiertos={subnivelesAbiertos}
          toggleSubnivel={toggleSubnivel}
          setMenuMovilAbierto={setMenuMovilAbierto}
        />
      </aside>

      <div className="pplx-main-pane">
        <header className="pplx-top-bar" style={{ padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Botón dinámico de Ocultar / Mostrar índice en PC */}
            <button
              onClick={() => setSidebarColapsado(!sidebarColapsado)}
              className="pplx-ghost-btn desktop-only-btn"
              title={sidebarColapsado ? "Mostrar índice" : "Ocultar índice"}
              style={{ padding: '6px 10px' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
              <span>{sidebarColapsado ? "Mostrar índice" : "Ocultar índice"}</span>
            </button>

            {/* Botón de índice móvil */}
          {/* Botón de índice (visible solo en móvil) */}
<button
  className="pplx-mobile-menu-trigger"
  onClick={() => setMenuMovilAbierto(true)}
  style={{ 
    display: 'none', /* Por defecto oculto, la media query CSS lo mostrará solo en móvil */
    alignItems: 'center', 
    gap: '6px', 
    background: 'transparent', 
    border: 'none', 
    cursor: 'pointer', 
    fontWeight: 500, 
    fontSize: '13px', 
    color: 'var(--color-ink)' 
  }}
>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
  <span>Índice</span>
</button>
          </div>

          <div className="pplx-breadcrumb desktop-only-breadcrumb" style={{ fontSize: '12px' }}>
            <span>Curso Matsigenka • Nivel A1</span>
            <span>•</span>
            <strong style={{ color: 'var(--color-ink)', fontWeight: 500 }}>
              {filtroActivo === 'todas' ? 'Catálogo General (PPT 1–64)' : filtroActivo}
            </strong>
          </div>

          <div style={{ position: 'relative' }} ref={cuentaRef}>
            <button
              onClick={() => setCuentaAbierta(!cuentaAbierta)}
              className="pplx-ghost-btn"
              style={{ padding: '6px 10px', fontSize: '12.5px' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Cuenta</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {cuentaAbierta && (
              <div className="pplx-account-dropdown">
                <div style={{ padding: '4px 6px 10px 6px', marginBottom: '6px', borderBottom: '1px solid var(--color-warm-mist)' }}>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-ink)' }}>
                    DNI: {alumno.dni}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setCuentaAbierta(false);
                    setAlumno(null);
                  }}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px',
                    borderRadius: '6px',
                    border: 'none',
                    background: 'transparent',
                    color: 'var(--color-error)',
                    fontSize: '13px',
                    cursor: 'pointer',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                  <span>Salir de la cuenta</span>
                </button>
              </div>
            )}
          </div>
        </header>

        <main className="pplx-content-column">
          <section className="pplx-search-hero">
            <h1 className="pplx-wordmark">Niagantsi Matsigenka</h1>
            <p className="pplx-wordmark-sub">
              Curso de Idioma Matsigenka – Nivel A1 • Repositorio Oficial de Presentaciones y Audios
            </p>

            <div className="pplx-search-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-graphite)" strokeWidth="2" style={{ flexShrink: 0 }}>
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Buscar por presentación (ej. PPT 3), palabra..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="pplx-search-input"
              />
              {busqueda && (
                <button
                  onClick={() => setBusqueda('')}
                  style={{ background: 'none', border: 'none', color: 'var(--color-ash)', cursor: 'pointer', fontSize: '14px', flexShrink: 0 }}
                >
                  ✕
                </button>
              )}
            </div>
          </section>

          {/* Barra superior central limpia: Solo 3 botones */}
          <section style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setFiltroActivo('todas')}
                className={`pplx-pill-chip ${filtroActivo === 'todas' ? 'active' : ''}`}
              >
                Todas las lecciones
              </button>
              <button
                onClick={() => setFiltroActivo('Unidad 1')}
                className={`pplx-pill-chip ${chipActivoCentral === 'Unidad 1' ? 'active' : ''}`}
              >
                Unidad 1
              </button>
              <button
                onClick={() => setFiltroActivo('Unidad 2')}
                className={`pplx-pill-chip ${chipActivoCentral === 'Unidad 2' ? 'active' : ''}`}
              >
                Unidad 2
              </button>
            </div>
          </section>

          {/* Barra de Navegación Lineal Minimalista con Iconos (Home y Flechas) */}
          {filtroActivo.startsWith('PPT') && (
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              marginBottom: '20px', 
              padding: '10px 14px', 
              backgroundColor: 'var(--color-soft-paper)', 
              borderRadius: '12px', 
              border: '1px solid var(--color-warm-mist)',
              gap: '8px'
            }}>
              <button
                onClick={() => setFiltroActivo('todas')}
                className="pplx-ghost-btn"
                title="Volver al Catálogo General"
                style={{ fontSize: '12px', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span>Catálogo</span>
              </button>

              <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                <button
                  onClick={() => setFiltroActivo(navegacionLinealPPT.anterior)}
                  disabled={!navegacionLinealPPT.anterior}
                  className="pplx-ghost-btn"
                  title="PPT Anterior"
                  style={{ fontSize: '12px', padding: '6px 8px', opacity: navegacionLinealPPT.anterior ? 1 : 0.35, display: 'flex', alignItems: 'center', gap: '3px' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="15 18 9 12 15 6"/></svg>
                  <span>Anterior</span>
                </button>
                <button
                  onClick={() => setFiltroActivo(navegacionLinealPPT.siguiente)}
                  disabled={!navegacionLinealPPT.siguiente}
                  className="pplx-ghost-btn"
                  title="PPT Siguiente"
                  style={{ fontSize: '12px', padding: '6px 8px', opacity: navegacionLinealPPT.siguiente ? 1 : 0.35, display: 'flex', alignItems: 'center', gap: '3px' }}
                >
                  <span>Siguiente</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>
            </div>
          )}

          {/* Listado de Presentaciones */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '6px' }}>
              <span style={{ fontSize: '12px', color: 'var(--color-graphite)', fontWeight: 500 }}>
                {filtroActivo === 'todas' ? 'CATÁLOGO GENERAL (PPT 1 AL 64)' : `VISTA: ${filtroActivo.toUpperCase()}`} ({pptsFiltradas.length} lecciones)
              </span>
              <span className="pplx-badge-teal">UNMSM • CURSO A1</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {pptsFiltradas.map((pptItem) => {
                const esPptActiva = pptReproduciendo?.id === pptItem.id;
                const esVistaDetallePPT = filtroActivo.startsWith('PPT');

                const q = busqueda.toLowerCase().trim();
                const audiosMostrados = q 
                  ? pptItem.audios.filter(audio => 
                      String(audio.num).includes(q) ||
                      audio.diapositiva.toLowerCase().includes(q) ||
                      (audio.funcion && audio.funcion.toLowerCase().includes(q)) ||
                      audio.desc.toLowerCase().includes(q)
                    )
                  : pptItem.audios;

                return (
                  <div
                    key={pptItem.id}
                    style={{
                      backgroundColor: 'var(--color-soft-paper)',
                      borderRadius: 'var(--radius-cards)',
                      border: '1px solid var(--color-warm-mist)',
                      padding: '16px',
                      boxShadow: 'var(--shadow-subtle)',
                      opacity: pptItem.disponible ? 1 : 0.78,
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: (esVistaDetallePPT || q) && pptItem.disponible ? '14px' : '0px', flexWrap: 'wrap', gap: '10px' }}>
                      <div 
                        onClick={() => { setFiltroActivo(pptItem.id); }}
                        style={{ display: 'flex', gap: '12px', alignItems: 'center', flex: 1, minWidth: '220px', cursor: 'pointer' }}
                      >
                        <div className="pplx-book-cover" style={{ width: '75px', height: '75px', borderRadius: '10px', overflow: 'hidden', flexShrink: '0', border: '1px solid var(--color-warm-mist)' }}>
                          <img src={pptItem.portada} alt={pptItem.id} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: pptItem.disponible ? 'none' : 'grayscale(25%)' }} />
                        </div>

                        <div style={{ minWidth: 0, flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                            <span style={{ fontSize: '11px', color: 'var(--color-graphite)', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {pptItem.unidad} • {pptItem.subnivel} • <strong style={{ color: 'var(--color-deep-teal)' }}>{pptItem.id}</strong>
                            </span>
                          </div>
                          <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-ink)', lineHeight: '1.25', wordBreak: 'break-word' }}>
                            {pptItem.titulo}
                          </h3>
                          <p style={{ fontSize: '12px', color: 'var(--color-graphite)', marginTop: '3px', lineHeight: '1.35', wordBreak: 'break-word' }}>
                            {pptItem.tema}
                          </p>
                          {!esVistaDetallePPT && !q && pptItem.disponible && (
                            <span style={{ fontSize: '11.5px', color: 'var(--color-deep-teal)', fontWeight: 600, display: 'inline-block', marginTop: '6px' }}>
                              Ver audios →
                            </span>
                          )}
                        </div>
                      </div>

                      <span className="pplx-badge-teal" style={{ backgroundColor: pptItem.disponible ? 'var(--color-deep-teal)' : 'var(--color-ash)', flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10.5px' }}>
                        {!pptItem.disponible && (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        )}
                        {pptItem.disponible ? `${pptItem.audios.length} audios` : 'Próximamente'}
                      </span>
                    </div>

                    {!pptItem.disponible && (
                      <div style={{ marginTop: '12px', padding: '10px 14px', backgroundColor: 'var(--color-parchment)', borderRadius: '8px', fontSize: '12px', color: 'var(--color-graphite)', display: 'flex', alignItems: 'center', gap: '8px', border: '1px dashed var(--color-warm-mist)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        <span>Contenido programado en la planificación oficial de la UNMSM.</span>
                      </div>
                    )}

                    {pptItem.disponible && (esVistaDetallePPT || q) && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-graphite)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                          Relación de audios {q ? `(filtrados por "${q}")` : ''}:
                        </span>

                        {audiosMostrados.length === 0 ? (
                          <p style={{ fontSize: '12px', color: 'var(--color-graphite)', fontStyle: 'italic', padding: '6px 0' }}>
                            No hay audios que coincidan en esta presentación.
                          </p>
                        ) : (
                          audiosMostrados.map((pista, idx) => {
                            const indiceReal = pptItem.audios.findIndex(a => a.num === pista.num);
                            const estaSonando = esPptActiva && indicePistaActual === indiceReal && reproduciendo;
                            const claveAudio = `${pptItem.id}_${pista.num}`;
                            const estaCompletado = audiosCompletados[claveAudio];

                            return (
                              <div
                                key={idx}
                                onClick={() => seleccionarAudioIndividual(pptItem, indiceReal)}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  padding: '10px 12px',
                                  borderRadius: '10px',
                                  backgroundColor: estaSonando ? '#f1f8f8' : 'var(--color-parchment)',
                                  border: '1px solid',
                                  borderColor: estaSonando ? 'var(--color-deep-teal)' : 'var(--color-warm-mist)',
                                  cursor: 'pointer',
                                  gap: '8px'
                                }}
                              >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0, flex: 1 }}>
                                  <button
                                    type="button"
                                    className="pplx-filled-btn-circle"
                                    style={{ width: '28px', height: '28px', fontSize: '9px', flexShrink: 0 }}
                                  >
                                    {estaSonando ? '❚❚' : '▶'}
                                  </button>
                                  <div style={{ minWidth: 0, flex: 1 }}>
                                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '1px', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                                      <span>Audio {pista.num < 10 ? `0${pista.num}` : pista.num}: {pista.diapositiva}</span>
                                      {estaCompletado && (
                                        <span style={{ fontSize: '10px', color: '#059669', backgroundColor: '#d1fae5', padding: '1px 5px', borderRadius: '4px', fontWeight: 600 }}>
                                          ✓ Escuchado
                                        </span>
                                      )}
                                    </div>
                                    <div style={{ fontSize: '11.5px', color: 'var(--color-graphite)', lineHeight: '1.3', wordBreak: 'break-word' }}>
                                      {pista.desc}
                                    </div>
                                  </div>
                                </div>

                                <span style={{ fontFamily: 'var(--font-ui-monospace)', fontSize: '11.5px', color: 'var(--color-ash)', flexShrink: 0 }}>
                                  {pista.duracion}
                                </span>
                              </div>
                            );
                          })
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>

      {/* 4. REPRODUCTOR SPOTIFY */}
      {pistaActual && pptReproduciendo && (
        <footer className="pplx-player-bar">
          <audio
            ref={audioRef}
            src={pistaActual.url}
            onPlay={() => setReproduciendo(true)}
            onPause={() => setReproduciendo(false)}
            onTimeUpdate={() => {
              if (audioRef.current) {
                setTiempoActual(audioRef.current.currentTime);
                setDuracionTotal(audioRef.current.duration || 0);
              }
            }}
            onEnded={() => {
              marcarAudioComoCompletado();
              irPistaSiguiente();
            }}
          />

          <div className="pplx-player-inner">
            <div className="pplx-player-left">
              <img
                src={pptReproduciendo.portada}
                alt=""
                style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover', flexShrink: 0, border: '1px solid var(--color-warm-mist)' }}
              />
              <div style={{ overflow: 'hidden', minWidth: 0 }}>
                <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {pptReproduciendo.id} • Audio {pistaActual.num}: {pistaActual.diapositiva}
                </div>
                <div style={{ fontSize: '11.5px', color: 'var(--color-graphite)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {pptReproduciendo.unidad} • {pptReproduciendo.subnivel} • {pistaActual.desc}
                </div>
              </div>
            </div>

            <div className="pplx-player-center">
              <div className="pplx-player-controls-row">
                <button
                  type="button"
                  onClick={irPistaAnterior}
                  disabled={!tieneAnterior}
                  className="pplx-track-nav-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="19 20 9 12 19 4 19 20" />
                    <line x1="5" y1="19" x2="5" y2="5" stroke="currentColor" strokeWidth="2.2" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => { if (audioRef.current) audioRef.current.currentTime -= 10; }}
                  className="pplx-seek-btn"
                >
                  ↺ 10s
                </button>

                <button
                  type="button"
                  onClick={alternarPlayPause}
                  className="pplx-filled-btn-circle"
                >
                  {reproduciendo ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => { if (audioRef.current) audioRef.current.currentTime += 10; }}
                  className="pplx-seek-btn"
                >
                  10s ↻
                </button>

                <button
                  type="button"
                  onClick={irPistaSiguiente}
                  disabled={!tieneSiguiente}
                  className="pplx-track-nav-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 4 15 12 5 20 5 4" />
                    <line x1="19" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="2.2" />
                  </svg>
                </button>
              </div>

              <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '10.5px', fontFamily: 'var(--font-ui-monospace)', color: 'var(--color-ash)', minWidth: '32px' }}>
                  {formatearTiempo(tiempoActual)}
                </span>
                <input
                  type="range"
                  min="0"
                  max={duracionTotal || 100}
                  value={tiempoActual}
                  onChange={(e) => {
                    const v = Number(e.target.value);
                    if (audioRef.current) audioRef.current.currentTime = v;
                    setTiempoActual(v);
                  }}
                  style={{ flex: 1, accentColor: 'var(--color-deep-teal)', cursor: 'pointer', height: '4px' }}
                />
                <span style={{ fontSize: '10.5px', fontFamily: 'var(--font-ui-monospace)', color: 'var(--color-ash)', minWidth: '32px', textAlign: 'right' }}>
                  {formatearTiempo(duracionTotal)}
                </span>
              </div>
            </div>

            <div className="pplx-player-right">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '10.5px', color: 'var(--color-ash)' }}>
                  Audio {indicePistaActual + 1} / {pptReproduciendo.audios.length}
                </span>
                <button onClick={cambiarVelocidad} className="pplx-pill-chip" style={{ padding: '2px 8px', fontSize: '11px' }}>
                  {velocidad}x
                </button>
              </div>
              <span className="pplx-player-brand-label">
                CEID • UNMSM
              </span>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}