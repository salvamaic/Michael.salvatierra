/* ============================================
   HACK BATTLE - Lógica del Juego
   Datos simulados como si vinieran de BD
   ============================================ */

// ===== BASE DE DATOS SIMULADA =====
const BaseDatos = {
    // Tabla: Usuario (con Roles)
    usuarios: [
        { id_usuario: 1, nombre_usuario: 'ShadowNet', correo: 'shadow@hackmail.com', contrasena: 'hack123', fecha_registro: '2026-01-15', rol: 'player' },
        { id_usuario: 2, nombre_usuario: 'CyberPhantom', correo: 'phantom@hackmail.com', contrasena: 'cyber456', fecha_registro: '2026-02-20', rol: 'player' },
        { id_usuario: 3, nombre_usuario: 'NullByte', correo: 'null@hackmail.com', contrasena: 'null789', fecha_registro: '2026-03-10', rol: 'player' },
        { id_usuario: 4, nombre_usuario: 'DarkPixel', correo: 'dark@hackmail.com', contrasena: 'dark321', fecha_registro: '2026-01-28', rol: 'player' },
        { id_usuario: 5, nombre_usuario: 'ZeroDay', correo: 'zero@hackmail.com', contrasena: 'zero000', fecha_registro: '2026-04-05', rol: 'player' },
        { id_usuario: 6, nombre_usuario: 'ByteStorm', correo: 'byte@hackmail.com', contrasena: 'byte111', fecha_registro: '2026-03-22', rol: 'player' },
        { id_usuario: 7, nombre_usuario: 'NetCracker', correo: 'net@hackmail.com', contrasena: 'net999', fecha_registro: '2026-05-01', rol: 'player' },
        { id_usuario: 8, nombre_usuario: 'GhostShell', correo: 'ghost@hackmail.com', contrasena: 'ghost666', fecha_registro: '2026-04-18', rol: 'player' },
        { id_usuario: 9, nombre_usuario: 'admin_hb', correo: 'admin@gamezone.com', contrasena: 'admin123', fecha_registro: '2026-06-01', rol: 'admin' },
        { id_usuario: 10, nombre_usuario: 'espectador_hb', correo: 'spectator@gamezone.com', contrasena: 'spec123', fecha_registro: '2026-06-15', rol: 'spectator' }
    ],

    // Tabla: Jugador
    jugadores: [
        { id_jugador: 1, id_usuario: 1, nivel: 15, experiencia: 3200, victorias: 48, derrotas: 12, partidas_jugadas: 60 },
        { id_jugador: 2, id_usuario: 2, nivel: 12, experiencia: 2400, victorias: 35, derrotas: 20, partidas_jugadas: 55 },
        { id_jugador: 3, id_usuario: 3, nivel: 18, experiencia: 4100, victorias: 62, derrotas: 8, partidas_jugadas: 70 },
        { id_jugador: 4, id_usuario: 4, nivel: 10, experiencia: 1800, victorias: 28, derrotas: 22, partidas_jugadas: 50 },
        { id_jugador: 5, id_usuario: 5, nivel: 20, experiencia: 5000, victorias: 75, derrotas: 5, partidas_jugadas: 80 },
        { id_jugador: 6, id_usuario: 6, nivel: 8, experiencia: 1200, victorias: 18, derrotas: 17, partidas_jugadas: 35 },
        { id_jugador: 7, id_usuario: 7, nivel: 14, experiencia: 2900, victorias: 42, derrotas: 18, partidas_jugadas: 60 },
        { id_jugador: 8, id_usuario: 8, nivel: 6, experiencia: 800, victorias: 10, derrotas: 15, partidas_jugadas: 25 },
    ],

    // Tabla: Herramienta
    herramientas: [
        { id_herramienta: 1, nombre: 'Virus', icono: '🔥', tipo: 'offensive', descripcion: 'Infecta el servidor rival causando daño directo', daño: 20, costo_energia: 25, cooldown: 2, nivel_req: 1 },
        { id_herramienta: 2, nombre: 'Bomba Lógica', icono: '💣', tipo: 'offensive', descripcion: 'Ataque devastador que causa daño masivo', daño: 35, costo_energia: 40, cooldown: 3, nivel_req: 3 },
        { id_herramienta: 3, nombre: 'DDoS', icono: '🌐', tipo: 'offensive', descripcion: 'Sobrecarga el servidor rival y lo bloquea 1 turno', daño: 15, costo_energia: 30, cooldown: 3, nivel_req: 5 },
        { id_herramienta: 4, nombre: 'Troyano', icono: '🐴', tipo: 'offensive', descripcion: 'Causa daño leve durante 3 turnos seguidos', daño: 10, costo_energia: 20, cooldown: 4, nivel_req: 7 },
        { id_herramienta: 5, nombre: 'Firewall', icono: '🛡️', tipo: 'defensive', descripcion: 'Bloquea completamente el próximo ataque enemigo', daño: 0, costo_energia: 20, cooldown: 2, nivel_req: 1 },
        { id_herramienta: 6, nombre: 'Encriptación', icono: '🔒', tipo: 'defensive', descripcion: 'Restaura seguridad de tu servidor', daño: -15, costo_energia: 15, cooldown: 1, nivel_req: 2 },
        { id_herramienta: 7, nombre: 'Escáner', icono: '🔍', tipo: 'utility', descripcion: 'Revela la próxima acción del rival', daño: 0, costo_energia: 10, cooldown: 2, nivel_req: 4 },
        { id_herramienta: 8, nombre: 'Overclock', icono: '⚡', tipo: 'utility', descripcion: 'Recupera 30 puntos de energía extra', daño: 0, costo_energia: 5, cooldown: 3, nivel_req: 6 },
        { id_herramienta: 9, nombre: 'Rootkit', icono: '🕳️', tipo: 'offensive', descripcion: 'Ataque profundo que ignora el Firewall del rival', daño: 25, costo_energia: 35, cooldown: 3, nivel_req: 9 },
        { id_herramienta: 10, nombre: 'VPN', icono: '🌀', tipo: 'defensive', descripcion: 'Activa inmunidad a DDoS durante 2 turnos', daño: 0, costo_energia: 20, cooldown: 3, nivel_req: 8 },
    ],

    // Tabla: Partida (historial simulado)
    partidas: [
        { id_partida: 1, id_jugador1: 1, id_jugador2: 3, ganador: 3, turnos: 12, fecha: '2026-06-20', duracion: '8:32' },
        { id_partida: 2, id_jugador1: 1, id_jugador2: 2, ganador: 1, turnos: 15, fecha: '2026-06-21', duracion: '10:15' },
        { id_partida: 3, id_jugador1: 5, id_jugador2: 1, ganador: 5, turnos: 9, fecha: '2026-06-22', duracion: '6:45' },
        { id_partida: 4, id_jugador1: 1, id_jugador2: 4, ganador: 1, turnos: 18, fecha: '2026-06-23', duracion: '12:20' },
        { id_partida: 5, id_jugador1: 7, id_jugador2: 1, ganador: 1, turnos: 11, fecha: '2026-06-24', duracion: '7:55' },
        { id_partida: 6, id_jugador1: 3, id_jugador2: 5, ganador: 5, turnos: 20, fecha: '2026-06-24', duracion: '14:10' },
        { id_partida: 7, id_jugador1: 2, id_jugador2: 6, ganador: 2, turnos: 8, fecha: '2026-06-25', duracion: '5:30' },
        { id_partida: 8, id_jugador1: 4, id_jugador2: 8, ganador: 4, turnos: 14, fecha: '2026-06-25', duracion: '9:40' },
    ],

    // Tabla: AuditoriaPartida (Alimentada por Trigger simulado trg_RegistrarAuditoria)
    auditoria: [
        { id_auditoria: 1, tabla_afectada: 'Partida', operacion: 'INSERT', usuario_db: 'ShadowNet', fecha: '2026-06-24 14:10:12', detalles: 'Se registró partida ID 6. Ganador: ZeroDay en 20 turnos.' },
        { id_auditoria: 2, tabla_afectada: 'Partida', operacion: 'INSERT', usuario_db: 'CyberPhantom', correo: 'phantom@hackmail.com', fecha: '2026-06-25 05:30:45', detalles: 'Se registró partida ID 7. Ganador: CyberPhantom en 8 turnos.' },
        { id_auditoria: 3, tabla_afectada: 'Herramienta', operacion: 'UPDATE', usuario_db: 'admin_hb', fecha: '2026-06-26 08:15:22', detalles: 'Se ejecutó UPDATE sobre Herramienta. id_herramienta=1 (Virus) establecido en 20 daño.' },
    ],

    // Tabla: Torneo
    torneos: [
        { id_torneo: 1, nombre: 'Copa HackBattle I', estado: 'Finalizado', participantes: 8, ganador: 'ZeroDay', fecha: '2026-05-15', premio: '500 XP' },
        { id_torneo: 2, nombre: 'Liga Nocturna', estado: 'Finalizado', participantes: 16, ganador: 'NullByte', fecha: '2026-06-01', premio: '1000 XP' },
        { id_torneo: 3, nombre: 'Torneo Relámpago', estado: 'En curso', participantes: 12, ganador: '-', fecha: '2026-06-26', premio: '750 XP' },
    ],

    // Tabla: Ranking (vista simulada)
    getRanking: function () {
        return this.jugadores
            .map(j => {
                const u = this.usuarios.find(u => u.id_usuario === j.id_usuario);
                const winrate = j.partidas_jugadas > 0 ? ((j.victorias / j.partidas_jugadas) * 100).toFixed(1) : 0;
                return { ...j, nombre: u ? u.nombre_usuario : 'Desconocido', winrate: winrate };
            })
            .filter(j => j.nombre !== 'admin_hb' && j.nombre !== 'espectador_hb')
            .sort((a, b) => b.victorias - a.victorias);
    },

    // Historial del jugador actual
    getHistorialJugador: function (idJugador) {
        return this.partidas
            .filter(p => p.id_jugador1 === idJugador || p.id_jugador2 === idJugador)
            .map(p => {
                const rival_id = p.id_jugador1 === idJugador ? p.id_jugador2 : p.id_jugador1;
                const rival_jugador = this.jugadores.find(j => j.id_jugador === rival_id);
                const rival_usuario = rival_jugador ? this.usuarios.find(u => u.id_usuario === rival_jugador.id_usuario) : null;
                return {
                    ...p,
                    rival: rival_usuario ? rival_usuario.nombre_usuario : (rival_id === 99 ? 'IA Rival' : 'Desconocido'),
                    resultado: p.ganador === idJugador ? 'Victoria' : 'Derrota'
                };
            })
            .reverse();
    }
};

// ===== ESTADO DEL JUEGO =====
let GameState = {
    currentScreen: 'login',
    jugadorActual: null,
    jugadorPerfil: null,
    batalla: null,
    sonidoActivo: true,
    isSpectatorMode: false,
    espectadorInterval: null,
    dificultad: 'normal',  // 'facil', 'normal', 'dificil'
    modoRapido: false       // Quick match con 60 HP
};

// ===== SINTETIZADOR DE AUDIO WEB API =====
const AudioSystem = {
    ctx: null,
    init: function () {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },
    play: function (type) {
        if (!GameState.sonidoActivo) return;
        this.init();
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        switch (type) {
            case 'click':
                osc.type = 'sine';
                osc.frequency.setValueAtTime(600, now);
                osc.frequency.exponentialRampToValueAtTime(100, now + 0.1);
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.linearRampToValueAtTime(0, now + 0.1);
                osc.start(now);
                osc.stop(now + 0.1);
                break;
            case 'attack':
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(180, now);
                osc.frequency.exponentialRampToValueAtTime(40, now + 0.4);
                gain.gain.setValueAtTime(0.12, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
                osc.start(now);
                osc.stop(now + 0.4);
                break;
            case 'heal':
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(220, now);
                osc.frequency.exponentialRampToValueAtTime(880, now + 0.3);
                gain.gain.setValueAtTime(0.15, now);
                gain.gain.linearRampToValueAtTime(0.01, now + 0.3);
                osc.start(now);
                osc.stop(now + 0.3);
                break;
            case 'shield':
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, now);
                osc.frequency.setValueAtTime(600, now + 0.08);
                osc.frequency.setValueAtTime(1000, now + 0.16);
                gain.gain.setValueAtTime(0.1, now);
                gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
                osc.start(now);
                osc.stop(now + 0.25);
                break;
            case 'error':
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(120, now);
                osc.frequency.setValueAtTime(100, now + 0.1);
                gain.gain.setValueAtTime(0.2, now);
                gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
                osc.start(now);
                osc.stop(now + 0.2);
                break;
            case 'victory':
                // Arpegio de victoria
                const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
                notes.forEach((freq, idx) => {
                    const o = this.ctx.createOscillator();
                    const g = this.ctx.createGain();
                    o.connect(g);
                    g.connect(this.ctx.destination);
                    o.frequency.setValueAtTime(freq, now + idx * 0.12);
                    g.gain.setValueAtTime(0.08, now + idx * 0.12);
                    g.gain.linearRampToValueAtTime(0, now + idx * 0.12 + 0.25);
                    o.start(now + idx * 0.12);
                    o.stop(now + idx * 0.12 + 0.25);
                });
                break;
            case 'defeat':
                // Sad slide
                osc.type = 'sine';
                osc.frequency.setValueAtTime(300, now);
                osc.frequency.linearRampToValueAtTime(70, now + 0.8);
                gain.gain.setValueAtTime(0.15, now);
                gain.gain.linearRampToValueAtTime(0.01, now + 0.8);
                osc.start(now);
                osc.stop(now + 0.8);
                break;
        }
    }
};

// ===== NOMBRES DE IA RIVALES =====
const nombresIA = ['Firewall_X', 'R00tKit', 'Malware_Pro', 'Trojan_Master', 'PhishKing', 'DarkC0de', 'Exploit_Z', 'Backdoor_99'];

// ===== FONDO ESTÁTICO =====
function iniciarMatrixRain() {
    // La cuadrícula de fondo blueprint se maneja limpiamente vía CSS en styles.css
}

// ===== SUGERENCIAS DE ROLES =====
function cargarCredenciales(username, password) {
    AudioSystem.play('click');
    document.getElementById('login-usuario').value = username;
    document.getElementById('login-password').value = password;
    mostrarNotificacion(`Credenciales de ${username} cargadas`, 'info');
}

// ===== CONFIGURAR MENÚ SEGÚN ROL =====
function configurarMenuSegunRol(rol) {
    const ids = ['batalla', 'espectador', 'admin', 'ranking', 'perfil', 'historial', 'torneos', 'certificado', 'desconectar'];
    ids.forEach(id => {
        const el = document.getElementById(`menu-btn-${id}`);
        if (el) el.style.display = 'none';
    });

    if (rol === 'admin') {
        ['admin', 'ranking', 'certificado', 'desconectar'].forEach(id => {
            const el = document.getElementById(`menu-btn-${id}`);
            if (el) el.style.display = 'block';
        });
    } else if (rol === 'spectator') {
        ['espectador', 'ranking', 'torneos', 'certificado', 'desconectar'].forEach(id => {
            const el = document.getElementById(`menu-btn-${id}`);
            if (el) el.style.display = 'block';
        });
    } else { // player
        ['batalla', 'ranking', 'perfil', 'historial', 'torneos', 'certificado', 'desconectar'].forEach(id => {
            const el = document.getElementById(`menu-btn-${id}`);
            if (el) el.style.display = 'block';
        });
    }
}

// ===== NAVEGACIÓN DE PANTALLAS =====
function mostrarPantalla(pantalla) {
    AudioSystem.play('click');
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(`screen-${pantalla}`);
    if (screen) {
        screen.classList.add('active');
        GameState.currentScreen = pantalla;
    }

    if (pantalla === 'ranking') renderRanking();
    if (pantalla === 'perfil') renderPerfil();
    if (pantalla === 'historial') renderHistorial();
    if (pantalla === 'torneos') renderTorneos();
    if (pantalla === 'admin-db') {
        renderAdminTools();
        renderAuditoria();
        actualizarEsquemaMeta();
    }
}

// ===== LOGIN =====
function intentarLogin() {
    const usuario = document.getElementById('login-usuario').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (!usuario || !password) {
        AudioSystem.play('error');
        mostrarNotificacion('Ingresa usuario y contraseña', 'error');
        return;
    }

    // Simular búsqueda en BD
    const user = BaseDatos.usuarios.find(u =>
        (u.nombre_usuario.toLowerCase() === usuario.toLowerCase() || u.correo.toLowerCase() === usuario.toLowerCase()) &&
        u.contrasena === password
    );

    if (user) {
        // Encontrar jugador o crear perfil ficticio
        let jugador = BaseDatos.jugadores.find(j => j.id_usuario === user.id_usuario);
        if (!jugador) {
            jugador = { id_jugador: user.id_usuario, id_usuario: user.id_usuario, nivel: 1, experiencia: 0, victorias: 0, derrotas: 0, partidas_jugadas: 0 };
        }
        
        GameState.jugadorActual = { ...user, ...jugador };
        
        // Configurar Barra de Rol superior
        const roleBar = document.getElementById('role-indicator-bar');
        const roleDisplay = document.getElementById('indicator-role');
        const userDisplay = document.getElementById('indicator-username');
        
        userDisplay.textContent = user.nombre_usuario;
        
        let dbRole = 'db_player';
        if (user.rol === 'admin') dbRole = 'db_owner';
        else if (user.rol === 'spectator') dbRole = 'db_spectator';
        
        roleDisplay.textContent = dbRole;
        roleDisplay.className = '';
        roleDisplay.classList.add(user.rol === 'admin' ? 'admin' : (user.rol === 'spectator' ? 'spec' : 'player'));
        
        roleBar.style.display = 'flex';
        configurarMenuSegunRol(user.rol);
        
        AudioSystem.play('victory');
        mostrarNotificacion(`¡Sesión iniciada como ${user.nombre_usuario}! [${dbRole}]`, 'success');
        
        // Lanzar una alerta DB simulando auditoría de login
        lanzarAlertaDB('procedure', 'sp_IniciarSesion', `Usuario '${user.nombre_usuario}' conectado con rol '${dbRole}'.`);
        
        setTimeout(() => mostrarPantalla('menu'), 500);
    } else {
        AudioSystem.play('error');
        mostrarNotificacion('Usuario o contraseña incorrectos', 'error');
    }
}

// ===== REGISTRO =====
function registrarUsuario() {
    const usuario = document.getElementById('login-usuario').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (!usuario || !password) {
        AudioSystem.play('error');
        mostrarNotificacion('Ingresa un nombre de usuario y contraseña', 'error');
        return;
    }

    if (usuario.length < 3) {
        AudioSystem.play('error');
        mostrarNotificacion('El nombre debe tener al menos 3 caracteres', 'error');
        return;
    }

    const existe = BaseDatos.usuarios.find(u => u.nombre_usuario.toLowerCase() === usuario.toLowerCase());
    if (existe) {
        AudioSystem.play('error');
        mostrarNotificacion('Ese nombre de usuario ya existe', 'error');
        return;
    }

    const nuevoId = BaseDatos.usuarios.length + 1;
    const nuevoUsuario = {
        id_usuario: nuevoId,
        nombre_usuario: usuario,
        correo: `${usuario.toLowerCase()}@hackmail.com`,
        contrasena: password,
        fecha_registro: new Date().toISOString().split('T')[0],
        rol: 'player'
    };
    BaseDatos.usuarios.push(nuevoUsuario);

    const nuevoJugador = {
        id_jugador: nuevoId,
        id_usuario: nuevoId,
        nivel: 1,
        experiencia: 0,
        victorias: 0,
        derrotas: 0,
        partidas_jugadas: 0
    };
    BaseDatos.jugadores.push(nuevoJugador);

    GameState.jugadorActual = { ...nuevoUsuario, ...nuevoJugador };
    
    // Configurar Barra de Rol superior
    document.getElementById('indicator-username').textContent = usuario;
    document.getElementById('indicator-role').textContent = 'db_player';
    document.getElementById('role-indicator-bar').style.display = 'flex';
    configurarMenuSegunRol('player');
    
    AudioSystem.play('victory');
    mostrarNotificacion(`¡Cuenta creada! Bienvenido, ${usuario}`, 'success');
    
    // Registrar auditoría de nuevo usuario
    BaseDatos.auditoria.push({
        id_auditoria: BaseDatos.auditoria.length + 1,
        tabla_afectada: 'Usuario',
        operacion: 'INSERT',
        usuario_db: usuario,
        fecha: new Date().toISOString().replace('T', ' ').substring(0, 19),
        detalles: `Registro de nuevo usuario '${usuario}' con id_usuario=${nuevoId}.`
    });
    
    setTimeout(() => mostrarPantalla('menu'), 500);
}

// ===== REGISTRO COMPLETO (Pantalla dedicada) =====
function ejecutarRegistroCompleto() {
    const usuario = document.getElementById('reg-usuario').value.trim();
    const nombre = document.getElementById('reg-nombre').value.trim();
    const correo = document.getElementById('reg-correo').value.trim();
    const password = document.getElementById('reg-password').value;
    const confirm = document.getElementById('reg-confirm').value;
    const terminos = document.getElementById('reg-terminos').checked;

    // Validaciones
    if (!usuario || !nombre || !correo || !password || !confirm) {
        AudioSystem.play('error');
        mostrarNotificacion('Todos los campos son obligatorios', 'error');
        return;
    }

    if (usuario.length < 3) {
        AudioSystem.play('error');
        mostrarNotificacion('El nombre de hacker debe tener al menos 3 caracteres', 'error');
        return;
    }

    if (nombre.length < 3) {
        AudioSystem.play('error');
        mostrarNotificacion('El nombre completo debe tener al menos 3 caracteres', 'error');
        return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        AudioSystem.play('error');
        mostrarNotificacion('Ingresa un correo electrónico válido', 'error');
        return;
    }

    if (password.length < 4) {
        AudioSystem.play('error');
        mostrarNotificacion('La contraseña debe tener al menos 4 caracteres', 'error');
        return;
    }

    if (password !== confirm) {
        AudioSystem.play('error');
        mostrarNotificacion('Las contraseñas no coinciden', 'error');
        return;
    }

    if (!terminos) {
        AudioSystem.play('error');
        mostrarNotificacion('Debes aceptar los términos y condiciones', 'error');
        return;
    }

    // Check unique username
    const existe = BaseDatos.usuarios.find(u => u.nombre_usuario.toLowerCase() === usuario.toLowerCase());
    if (existe) {
        AudioSystem.play('error');
        mostrarNotificacion('Ese nombre de hacker ya está registrado en el servidor', 'error');
        return;
    }

    // Check unique email
    const emailExiste = BaseDatos.usuarios.find(u => u.correo && u.correo.toLowerCase() === correo.toLowerCase());
    if (emailExiste) {
        AudioSystem.play('error');
        mostrarNotificacion('Ese correo electrónico ya está registrado', 'error');
        return;
    }

    // Create user
    const nuevoId = BaseDatos.usuarios.length + 1;
    const nuevoUsuario = {
        id_usuario: nuevoId,
        nombre_usuario: usuario,
        nombre_completo: nombre,
        correo: correo,
        email: correo,
        contrasena: password,
        fecha_registro: new Date().toISOString().split('T')[0],
        rol: 'player'
    };
    BaseDatos.usuarios.push(nuevoUsuario);

    // Create player profile
    const nuevoJugador = {
        id_jugador: nuevoId,
        id_usuario: nuevoId,
        nivel: 1,
        experiencia: 0,
        victorias: 0,
        derrotas: 0,
        partidas_jugadas: 0
    };
    BaseDatos.jugadores.push(nuevoJugador);

    GameState.jugadorActual = { ...nuevoUsuario, ...nuevoJugador };

    // Configure role bar
    document.getElementById('indicator-username').textContent = usuario;
    document.getElementById('indicator-role').textContent = 'db_player';
    document.getElementById('indicator-role').className = 'player';
    document.getElementById('role-indicator-bar').style.display = 'flex';
    configurarMenuSegunRol('player');

    AudioSystem.play('victory');
    mostrarNotificacion(`¡Cuenta creada con éxito! Bienvenido, ${usuario}`, 'success');

    // Audit log
    BaseDatos.auditoria.push({
        id_auditoria: BaseDatos.auditoria.length + 1,
        tabla_afectada: 'Usuario',
        operacion: 'INSERT',
        usuario_db: usuario,
        fecha: new Date().toISOString().replace('T', ' ').substring(0, 19),
        detalles: `Registro completo de nuevo hacker '${usuario}' (${nombre}) con correo ${correo}. id_usuario=${nuevoId}.`
    });

    lanzarAlertaDB('procedure', 'sp_RegistrarUsuario', `EXEC sp_RegistrarUsuario @nombre='${usuario}', @email='${correo}', @rol='player';`);

    // Clear form fields
    document.getElementById('reg-usuario').value = '';
    document.getElementById('reg-nombre').value = '';
    document.getElementById('reg-correo').value = '';
    document.getElementById('reg-password').value = '';
    document.getElementById('reg-confirm').value = '';
    document.getElementById('reg-terminos').checked = false;

    setTimeout(() => mostrarPantalla('menu'), 600);
}

function cerrarSesion() {
    AudioSystem.play('defeat');
    
    // Parar espectador si está activo
    if (GameState.espectadorInterval) {
        clearInterval(GameState.espectadorInterval);
        GameState.espectadorInterval = null;
    }
    
    GameState.jugadorActual = null;
    document.getElementById('role-indicator-bar').style.display = 'none';
    document.getElementById('login-usuario').value = '';
    document.getElementById('login-password').value = '';
    mostrarPantalla('login');
    mostrarNotificacion('Sesión cerrada', 'info');
}
// ===== VISOR DE ALERTAS DE BASE DE DATOS (TRIGGERS / PROCEDURES) =====
function lanzarAlertaDB(tipo, nombre, mensaje) {
    const area = document.getElementById('db-alert-area');
    if (!area) return;

    const toast = document.createElement('div');
    toast.className = `db-log-toast ${tipo}`;

    const icon = tipo === 'trigger' ? '⚙️' : '⚡';
    const title = tipo === 'trigger' ? `TRIGGER: ${nombre}` : `PROCEDURE: ${nombre}`;

    toast.innerHTML = `
        <div class="db-log-icon">${icon}</div>
        <div class="db-log-info">
            <div class="db-log-title">${title}</div>
            <div class="db-log-msg">${mensaje}</div>
        </div>
    `;

    area.appendChild(toast);

    // Sonido sutil de ejecución en SQL Server
    if (tipo === 'trigger' && GameState.sonidoActivo) {
        const audioCtx = AudioSystem.ctx;
        if (audioCtx) {
            const now = audioCtx.currentTime;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.frequency.setValueAtTime(880, now);
            gain.gain.setValueAtTime(0.015, now);
            gain.gain.linearRampToValueAtTime(0, now + 0.12);
            osc.start(now);
            osc.stop(now + 0.12);
        }
    }

    setTimeout(() => {
        toast.style.animation = 'toastFadeOut 0.4s ease forwards';
        setTimeout(() => toast.remove(), 400);
    }, 3600);
}

// ===== BATALLA =====
function iniciarBatalla() {
    GameState.isSpectatorMode = false;
    const rivalNombre = nombresIA[Math.floor(Math.random() * nombresIA.length)];
    const hpInicial = GameState.modoRapido ? 60 : 100;

    GameState.batalla = {
        turno: 1,
        fase: 'jugador',
        terminada: false,
        stats: { dañoInfligido: 0, dañoRecibido: 0, herramientasUsadas: {}, energiaConsumida: 0 },
        jugador: {
            nombre: GameState.jugadorActual.nombre_usuario,
            seguridad: hpInicial,
            energia: 100,
            firewall: false,
            ddosStun: false,
            troyano: 0,
            cooldowns: {},
            scannerActive: false,
            scannerResult: '',
            vpnTurnos: 0
        },
        enemigo: {
            nombre: rivalNombre,
            seguridad: hpInicial,
            energia: 100,
            firewall: false,
            ddosStun: false,
            troyano: 0,
            cooldowns: {},
            nivel: Math.floor(Math.random() * 10) + 5,
            vpnTurnos: 0
        },
        log: []
    };

    mostrarPantalla('batalla');
    renderBatalla();
    
    // Alerts de BD
    lanzarAlertaDB('procedure', 'sp_IniciarPartida', `EXEC sp_IniciarPartida @id_jugador1 = ${GameState.jugadorActual.id_jugador}, @id_jugador2 = 99 (IA);`);
    setTimeout(() => {
        lanzarAlertaDB('trigger', 'trg_CrearPerfil', `trg_CrearPerfil: Perfil de '${GameState.jugadorActual.nombre_usuario}' verificado en caché.`);
    }, 300);

    const modoLabel = GameState.modoRapido ? ' [⚡ MODO RÁPIDO]' : '';
    const diffLabel = GameState.dificultad === 'facil' ? ' [🟢 Novato]' : GameState.dificultad === 'dificil' ? ' [🔴 Elite]' : ' [🟡 Hacker]';
    agregarLog('system', `⚡ Conexión establecida. ${rivalNombre} ha sido detectado en la red.${modoLabel}${diffLabel}`);
    agregarLog('system', `🎯 ¡La batalla comienza! Tu turno.`);
}

function renderBatalla() {
    const b = GameState.batalla;
    if (!b) return;

    // Actualizar info del jugador
    document.getElementById('player-name').textContent = b.jugador.nombre;
    document.getElementById('player-security').textContent = b.jugador.seguridad;
    document.getElementById('player-energy').textContent = b.jugador.energia;
    document.getElementById('player-security-bar').style.width = `${b.jugador.seguridad}%`;
    document.getElementById('player-energy-bar').style.width = `${b.jugador.energia}%`;

    // Color de barra de vida según cantidad
    const playerBar = document.getElementById('player-security-bar');
    playerBar.className = 'bar-fill';
    if (b.jugador.seguridad > 60) playerBar.classList.add('bar-health');
    else if (b.jugador.seguridad > 30) playerBar.classList.add('bar-health-mid');
    else playerBar.classList.add('bar-health-low');

    // Actualizar info del enemigo
    document.getElementById('enemy-name').textContent = b.enemigo.nombre;
    document.getElementById('enemy-security').textContent = b.enemigo.seguridad;
    document.getElementById('enemy-energy').textContent = b.enemigo.energia;
    document.getElementById('enemy-security-bar').style.width = `${b.enemigo.seguridad}%`;
    document.getElementById('enemy-energy-bar').style.width = `${b.enemigo.energia}%`;

    const enemyBar = document.getElementById('enemy-security-bar');
    enemyBar.className = 'bar-fill';
    if (b.enemigo.seguridad > 60) enemyBar.classList.add('bar-enemy');
    else if (b.enemigo.seguridad > 30) enemyBar.classList.add('bar-health-mid');
    else enemyBar.classList.add('bar-health-low');

    // Turno
    document.getElementById('turn-number').textContent = `TURNO ${b.turno}`;
    
    // Indicador Espectador
    const turnStatus = document.getElementById('turn-status');
    if (GameState.isSpectatorMode) {
        turnStatus.innerHTML = '<span class="spectator-indicator">SIMULACIÓN IA vs IA</span>';
    } else {
        turnStatus.textContent = b.fase === 'jugador' ? '>> Tu turno - Elige herramienta' : '>> Rival ejecutando...';
    }

    // Efectos activos
    renderEfectos('player', b.jugador);
    renderEfectos('enemy', b.enemigo);

    // Herramientas
    renderHerramientas();
}

function renderEfectos(target, entity) {
    const container = document.getElementById(`${target}-effects`);
    container.innerHTML = '';

    if (entity.firewall) {
        container.innerHTML += '<span class="effect-tag buff">🛡️ Firewall</span>';
    }
    if (entity.vpnTurnos > 0) {
        container.innerHTML += `<span class="effect-tag buff">🌀 VPN (${entity.vpnTurnos}t)</span>`;
    }
    if (entity.troyano > 0) {
        container.innerHTML += `<span class="effect-tag debuff">🐴 Troyano (${entity.troyano}t)</span>`;
    }
    if (entity.ddosStun) {
        container.innerHTML += '<span class="effect-tag debuff">🌐 Bloqueado</span>';
    }
    if (entity.scannerActive) {
        container.innerHTML += '<span class="effect-tag neutral">🔍 Escáner</span>';
    }
}

// ===== DAÑO FLOTANTE =====
function mostrarDañoFlotante(target, texto, tipo) {
    const panel = document.querySelector(`.${target === 'player' ? 'player' : 'enemy'}-panel`);
    if (!panel) return;

    const floater = document.createElement('div');
    floater.className = `damage-floater ${tipo}`;
    floater.textContent = texto;
    panel.appendChild(floater);

    setTimeout(() => floater.remove(), 1200);
}

function renderHerramientas() {
    const grid = document.getElementById('tools-grid');
    const b = GameState.batalla;

    if (GameState.isSpectatorMode) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 24px; color: var(--text-muted); font-size: 0.9rem; font-family: var(--font-mono);">
                👁️‍🗨️ Modo Espectador Activo. Los agentes de IA están tomando decisiones en tiempo real.
            </div>
        `;
        return;
    }

    grid.innerHTML = BaseDatos.herramientas.map(h => {
        const enCooldown = b.jugador.cooldowns[h.id_herramienta] > 0;
        const sinEnergia = b.jugador.energia < h.costo_energia;
        const bloqueado = b.jugador.ddosStun;
        const disabled = enCooldown || sinEnergia || bloqueado || b.fase !== 'jugador' || b.terminada;

        let clases = `tool-btn ${h.tipo}`;
        if (enCooldown) clases += ' cooldown';
        else if (disabled) clases += ' disabled';

        const cdText = enCooldown ? `data-cooldown="${b.jugador.cooldowns[h.id_herramienta]}T"` : '';

        let infoText = '';
        // Fix: DDoS y herramientas especiales primero, luego genéricas
        if (h.nombre === 'DDoS') infoText = `⚔️ ${h.daño} + bloqueo`;
        else if (h.nombre === 'Overclock') infoText = `⚡ +30 energía`;
        else if (h.nombre === 'Firewall') infoText = `🛡️ Bloquea ataque`;
        else if (h.nombre === 'Escáner') infoText = `🔍 Espía rival`;
        else if (h.nombre === 'VPN') infoText = `🌀 Anti-DDoS 2T`;
        else if (h.nombre === 'Rootkit') infoText = `⚔️ ${h.daño} ignora 🛡️`;
        else if (h.daño > 0) infoText = `⚔️ ${h.daño} daño`;
        else if (h.daño < 0) infoText = `💚 ${Math.abs(h.daño)} curación`;

        return `
            <div class="${clases}" ${cdText} onclick="${disabled ? '' : `usarHerramienta(${h.id_herramienta})`}" title="${h.descripcion}">
                <span class="tool-icon">${h.icono}</span>
                <span class="tool-name">${h.nombre}</span>
                <span class="tool-cost">⚡ ${h.costo_energia}</span>
                <span class="tool-dmg">${infoText}</span>
            </div>
        `;
    }).join('');
}

function usarHerramienta(idHerramienta) {
    const b = GameState.batalla;
    if (!b || b.fase !== 'jugador' || b.terminada) return;

    const herramienta = BaseDatos.herramientas.find(h => h.id_herramienta === idHerramienta);
    if (!herramienta) return;

    if (b.jugador.cooldowns[idHerramienta] > 0) {
        AudioSystem.play('error');
        mostrarNotificacion('Herramienta en cooldown', 'error');
        return;
    }
    if (b.jugador.energia < herramienta.costo_energia) {
        AudioSystem.play('error');
        mostrarNotificacion('Energía insuficiente', 'error');
        return;
    }

    // [PROCEDURE] Ejecutar movimiento
    lanzarAlertaDB('procedure', 'sp_RealizarMovimiento', `EXEC sp_RealizarMovimiento @id_jugador = ${GameState.jugadorActual.id_jugador}, @id_herramienta = ${idHerramienta};`);

    // [TRIGGER] Validar energía
    setTimeout(() => {
        lanzarAlertaDB('trigger', 'trg_ValidarEnergia', `trg_ValidarEnergia EXECUTED. Cost: ${herramienta.costo_energia}. Available: ${b.jugador.energia}`);
    }, 200);

    // Consumir energía y trackear stats
    b.jugador.energia -= herramienta.costo_energia;
    b.stats.energiaConsumida += herramienta.costo_energia;
    b.stats.herramientasUsadas[herramienta.nombre] = (b.stats.herramientasUsadas[herramienta.nombre] || 0) + 1;
    b.jugador.cooldowns[idHerramienta] = herramienta.cooldown;

    // Aplicar efecto
    setTimeout(() => {
        aplicarEfecto(herramienta, b.jugador, b.enemigo, true);

        if (b.enemigo.seguridad <= 0) {
            b.enemigo.seguridad = 0;
            finalizarBatalla(true);
            return;
        }

        b.fase = 'enemigo';
        renderBatalla();

        setTimeout(() => {
            turnoEnemigo();
        }, 1400);
    }, 500);
}

// ===== MOTOR DE BATALLA Y SIMULACIÓN =====

function iniciarTurnoJugador() {
    const b = GameState.batalla;
    if (!b) return;

    // Regenerar energía al inicio del turno (+15)
    b.jugador.energia = Math.min(100, b.jugador.energia + 15);

    procesarInicioTurno(b.jugador);

    if (b.jugador.ddosStun) {
        // Check VPN immunity
        if (b.jugador.vpnTurnos > 0) {
            b.jugador.ddosStun = false;
            b.jugador.vpnTurnos--;
            agregarLog('system', `🌀 VPN de ${b.jugador.nombre} bloqueó el DDoS. Inmunidad restante: ${b.jugador.vpnTurnos}T`);
        } else {
            b.jugador.ddosStun = false;
            agregarLog('system', `🌐 ${b.jugador.nombre} está bloqueado por DDoS y pierde el turno.`);
            b.fase = 'enemigo';
            b.turno++;
            renderBatalla();
            setTimeout(() => {
                turnoEnemigo();
            }, 1400);
            return;
        }
    }

    renderBatalla();
}

function turnoEnemigo() {
    const b = GameState.batalla;
    if (!b || b.terminada || b.fase !== 'enemigo') return;

    // Regenerar energía del enemigo al inicio del turno (+15)
    b.enemigo.energia = Math.min(100, b.enemigo.energia + 15);

    procesarInicioTurno(b.enemigo);

    if (b.enemigo.ddosStun) {
        if (b.enemigo.vpnTurnos > 0) {
            b.enemigo.ddosStun = false;
            b.enemigo.vpnTurnos--;
            agregarLog('system', `🌀 VPN de ${b.enemigo.nombre} bloqueó el DDoS.`);
        } else {
            b.enemigo.ddosStun = false;
            agregarLog('system', `🌐 ${b.enemigo.nombre} está bloqueado por DDoS y pierde el turno.`);
            b.fase = 'jugador';
            b.turno++;
            iniciarTurnoJugador();
            return;
        }
    }

    const accion = elegirAccionIA(b.enemigo, b.jugador);
    
    if (accion) {
        const h = accion.herramienta;
        b.enemigo.energia -= h.costo_energia;
        b.enemigo.cooldowns[h.id_herramienta] = h.cooldown;

        lanzarAlertaDB('procedure', 'sp_RealizarMovimiento', `EXEC sp_RealizarMovimiento @id_jugador = 99 (IA), @id_herramienta = ${h.id_herramienta};`);

        aplicarEfecto(h, b.enemigo, b.jugador, false);

        if (b.jugador.seguridad <= 0) {
            b.jugador.seguridad = 0;
            finalizarBatalla(false);
            return;
        }
    } else {
        agregarLog('system', `💤 ${b.enemigo.nombre} no tiene energía y decide omitir el turno.`);
    }

    b.fase = 'jugador';
    b.turno++;
    iniciarTurnoJugador();
}

function iniciarEspectador() {
    GameState.isSpectatorMode = true;
    const rival1 = nombresIA[Math.floor(Math.random() * nombresIA.length)];
    const rival2 = nombresIA[Math.floor(Math.random() * nombresIA.length)];
    const finalRival2 = rival1 === rival2 ? 'ShadowNet_AI' : rival2;

    GameState.batalla = {
        turno: 1,
        fase: 'jugador',
        terminada: false,
        jugador: {
            nombre: `${rival1} (Bot A)`,
            seguridad: 100,
            energia: 100,
            firewall: false,
            ddosStun: false,
            troyano: 0,
            cooldowns: {},
            scannerActive: false,
            scannerResult: ''
        },
        enemigo: {
            nombre: `${finalRival2} (Bot B)`,
            seguridad: 100,
            energia: 100,
            firewall: false,
            ddosStun: false,
            troyano: 0,
            cooldowns: {},
            nivel: Math.floor(Math.random() * 10) + 5
        },
        log: []
    };

    mostrarPantalla('batalla');
    renderBatalla();

    lanzarAlertaDB('procedure', 'sp_IniciarSimulacionEspectador', `EXEC sp_IniciarSimulacionEspectador @agenteA = '${rival1}', @agenteB = '${finalRival2}';`);

    agregarLog('system', `👁️‍🗨️ Simulación IA vs IA iniciada.`);
    agregarLog('system', `Bot A (${rival1}) vs Bot B (${finalRival2})`);

    if (GameState.espectadorInterval) clearInterval(GameState.espectadorInterval);
    
    GameState.espectadorInterval = setInterval(() => {
        const b = GameState.batalla;
        if (!b || b.terminada) {
            clearInterval(GameState.espectadorInterval);
            GameState.espectadorInterval = null;
            return;
        }

        if (b.fase === 'jugador') {
            decidirAccionIA(b.jugador, b.enemigo, true);
        } else {
            decidirAccionIA(b.enemigo, b.jugador, false);
        }
    }, 1800);
}

function decidirAccionIA(atacante, defensor, esBotA) {
    const b = GameState.batalla;
    if (!b || b.terminada) return;

    procesarInicioTurno(atacante);

    if (atacante.ddosStun) {
        atacante.ddosStun = false;
        agregarLog('system', `🌐 ${atacante.nombre} está bloqueado por DDoS y pierde el turno.`);
        b.fase = esBotA ? 'enemigo' : 'jugador';
        b.turno++;
        renderBatalla();
        return;
    }

    const accion = elegirAccionIA(atacante, defensor);
    if (accion) {
        const h = accion.herramienta;
        atacante.energia -= h.costo_energia;
        atacante.cooldowns[h.id_herramienta] = h.cooldown;

        lanzarAlertaDB('procedure', 'sp_RealizarMovimiento', `EXEC sp_RealizarMovimiento @id_jugador = ${esBotA ? 1 : 2}, @id_herramienta = ${h.id_herramienta};`);

        aplicarEfecto(h, atacante, defensor, esBotA);

        if (defensor.seguridad <= 0) {
            defensor.seguridad = 0;
            finalizarBatalla(esBotA);
            return;
        }
    } else {
        atacante.energia = Math.min(100, atacante.energia + 15);
        agregarLog('system', `💤 ${atacante.nombre} no tiene energía y decide omitir el turno.`);
    }

    b.fase = esBotA ? 'enemigo' : 'jugador';
    b.turno++;
    renderBatalla();
}

function elegirAccionIA(bot, oponente) {
    const tools = BaseDatos.herramientas.filter(h => {
        const enCD = bot.cooldowns[h.id_herramienta] > 0;
        const sinEnergy = bot.energia < h.costo_energia;
        return !enCD && !sinEnergy;
    });

    if (tools.length === 0) return null;

    const dificultad = GameState.dificultad;

    // IA Fácil: Solo random
    if (dificultad === 'facil') {
        const randomTool = tools[Math.floor(Math.random() * tools.length)];
        return { herramienta: randomTool };
    }

    // IA Difícil: Prioriza combo letal
    if (dificultad === 'dificil') {
        // Si el oponente está bajo, usar Rootkit (ignora Firewall) o Bomba Lógica para rematar
        const rootkit = tools.find(h => h.nombre === 'Rootkit');
        if (rootkit && oponente.seguridad <= 30 && oponente.firewall) {
            return { herramienta: rootkit };
        }
        const bombTool = tools.find(h => h.nombre === 'Bomba Lógica');
        if (bombTool && oponente.seguridad <= 40) {
            return { herramienta: bombTool };
        }
        // Siempre usa Firewall si el bot está bajo
        const firewallTool = tools.find(h => h.nombre === 'Firewall');
        if (firewallTool && bot.seguridad < 40 && !bot.firewall) {
            return { herramienta: firewallTool };
        }
    }

    // IA Normal y Difícil: Lógica estratégica
    const healTool = tools.find(h => h.nombre === 'Encriptación');
    if (bot.seguridad < 45 && healTool) {
        return { herramienta: healTool };
    }

    const energyTool = tools.find(h => h.nombre === 'Overclock');
    if (bot.energia < 35 && energyTool) {
        return { herramienta: energyTool };
    }

    const bombTool = tools.find(h => h.nombre === 'Bomba Lógica');
    if (bombTool && oponente.seguridad > 30) {
        return { herramienta: bombTool };
    }

    // Rootkit si rival tiene Firewall
    const rootkit = tools.find(h => h.nombre === 'Rootkit');
    if (rootkit && oponente.firewall) {
        return { herramienta: rootkit };
    }

    const ddosTool = tools.find(h => h.nombre === 'DDoS');
    if (ddosTool && !oponente.ddosStun && !(oponente.vpnTurnos > 0)) {
        return { herramienta: ddosTool };
    }

    const randomTool = tools[Math.floor(Math.random() * tools.length)];
    return { herramienta: randomTool };
}

function procesarInicioTurno(entidad) {
    if (entidad.troyano > 0) {
        entidad.seguridad -= 10;
        entidad.troyano--;
        agregarLog('system', `🐴 Troyano activo causa 10% de daño de red continuo a ${entidad.nombre}.`);
        if (entidad.seguridad < 0) entidad.seguridad = 0;
    }

    for (let key in entidad.cooldowns) {
        if (entidad.cooldowns[key] > 0) {
            entidad.cooldowns[key]--;
        }
    }
}

function aplicarEfecto(herramienta, atacante, defensor, esAtacanteJugador) {
    const targetName = esAtacanteJugador ? 'enemy' : 'player';
    const attackerName = esAtacanteJugador ? 'player' : 'enemy';

    if (herramienta.tipo === 'offensive') {
        AudioSystem.play('attack');
        animarPanel(targetName, 'attack');
    } else if (herramienta.tipo === 'defensive') {
        AudioSystem.play('heal');
        animarPanel(attackerName, 'heal');
    } else {
        AudioSystem.play('click');
    }

    let msg = '';
    const b = GameState.batalla;

    // Rootkit ignora Firewall
    if (herramienta.tipo === 'offensive' && defensor.firewall && herramienta.nombre !== 'Rootkit') {
        defensor.firewall = false;
        msg = `🛡️ ${defensor.nombre} bloqueó el ataque de ${atacante.nombre} usando su Firewall.`;
        agregarLog('system', msg);
        lanzarAlertaDB('trigger', 'trg_CalcularDaño', `trg_CalcularDaño: Daño bloqueado por Firewall de ${defensor.nombre}.`);
        return;
    }

    if (herramienta.nombre === 'Virus') {
        defensor.seguridad -= herramienta.daño;
        if (b && b.stats && esAtacanteJugador) b.stats.dañoInfligido += herramienta.daño;
        if (b && b.stats && !esAtacanteJugador) b.stats.dañoRecibido += herramienta.daño;
        msg = `💥 ${atacante.nombre} infectó con Virus a ${defensor.nombre} causando ${herramienta.daño}% de daño.`;
        lanzarAlertaDB('trigger', 'trg_CalcularDaño', `trg_CalcularDaño: Daño directo de ${herramienta.daño} a ${defensor.nombre}.`);
        mostrarDañoFlotante(esAtacanteJugador ? 'enemy' : 'player', `-${herramienta.daño}`, 'damage');
    } 
    else if (herramienta.nombre === 'Bomba Lógica') {
        defensor.seguridad -= herramienta.daño;
        if (b && b.stats && esAtacanteJugador) b.stats.dañoInfligido += herramienta.daño;
        if (b && b.stats && !esAtacanteJugador) b.stats.dañoRecibido += herramienta.daño;
        msg = `💣 ${atacante.nombre} detonó una Bomba Lógica en ${defensor.nombre} causando ${herramienta.daño}% de daño.`;
        lanzarAlertaDB('trigger', 'trg_CalcularDaño', `trg_CalcularDaño: Daño crítico de ${herramienta.daño} a ${defensor.nombre}.`);
        mostrarDañoFlotante(esAtacanteJugador ? 'enemy' : 'player', `-${herramienta.daño}`, 'damage-crit');
    } 
    else if (herramienta.nombre === 'DDoS') {
        defensor.seguridad -= herramienta.daño;
        if (b && b.stats && esAtacanteJugador) b.stats.dañoInfligido += herramienta.daño;
        if (b && b.stats && !esAtacanteJugador) b.stats.dañoRecibido += herramienta.daño;
        defensor.ddosStun = true;
        msg = `🌐 ${atacante.nombre} ejecutó DDoS sobre ${defensor.nombre} causando ${herramienta.daño}% de daño y bloqueando su red.`;
        lanzarAlertaDB('trigger', 'trg_CalcularDaño', `trg_CalcularDaño: DDoS paralizó a ${defensor.nombre}.`);
        mostrarDañoFlotante(esAtacanteJugador ? 'enemy' : 'player', `-${herramienta.daño}`, 'damage');
    } 
    else if (herramienta.nombre === 'Troyano') {
        defensor.seguridad -= herramienta.daño;
        if (b && b.stats && esAtacanteJugador) b.stats.dañoInfligido += herramienta.daño;
        defensor.troyano = 3;
        msg = `🐴 ${atacante.nombre} instaló un Troyano en ${defensor.nombre} causando ${herramienta.daño}% de daño (infección activa).`;
        lanzarAlertaDB('trigger', 'trg_CalcularDaño', `trg_CalcularDaño: Troyano instalado en ${defensor.nombre}.`);
        mostrarDañoFlotante(esAtacanteJugador ? 'enemy' : 'player', `-${herramienta.daño}`, 'damage');
    } 
    else if (herramienta.nombre === 'Rootkit') {
        // Rootkit ignora Firewall
        if (defensor.firewall) {
            defensor.firewall = false;
            msg = `🕳️ ${atacante.nombre} desplegó Rootkit en ${defensor.nombre} destruyendo su Firewall y causando ${herramienta.daño}% de daño.`;
        } else {
            msg = `🕳️ ${atacante.nombre} desplegó Rootkit en ${defensor.nombre} causando ${herramienta.daño}% de daño profundo.`;
        }
        defensor.seguridad -= herramienta.daño;
        if (b && b.stats && esAtacanteJugador) b.stats.dañoInfligido += herramienta.daño;
        lanzarAlertaDB('trigger', 'trg_CalcularDaño', `trg_CalcularDaño: Rootkit penetró defensas de ${defensor.nombre}.`);
        mostrarDañoFlotante(esAtacanteJugador ? 'enemy' : 'player', `-${herramienta.daño}`, 'damage-crit');
    }
    else if (herramienta.nombre === 'Firewall') {
        atacante.firewall = true;
        msg = `🛡️ ${atacante.nombre} levantó un Firewall defensivo.`;
    } 
    else if (herramienta.nombre === 'Encriptación') {
        const maxHp = GameState.modoRapido ? 60 : 100;
        atacante.seguridad = Math.min(maxHp, atacante.seguridad + Math.abs(herramienta.daño));
        msg = `🔒 ${atacante.nombre} encriptó su servidor recuperando ${Math.abs(herramienta.daño)}% de seguridad.`;
        mostrarDañoFlotante(esAtacanteJugador ? 'player' : 'enemy', `+${Math.abs(herramienta.daño)}`, 'heal');
    } 
    else if (herramienta.nombre === 'Escáner') {
        atacante.scannerActive = true;
        const randomTool = BaseDatos.herramientas[Math.floor(Math.random() * BaseDatos.herramientas.length)];
        atacante.scannerResult = randomTool.nombre;
        msg = `🔍 ${atacante.nombre} escaneó el rival y detectó que planea usar: ${randomTool.nombre}.`;
    } 
    else if (herramienta.nombre === 'Overclock') {
        atacante.energia = Math.min(100, atacante.energia + 30);
        msg = `⚡ ${atacante.nombre} aplicó Overclock recuperando 30 puntos de energía.`;
    }
    else if (herramienta.nombre === 'VPN') {
        atacante.vpnTurnos = 2;
        msg = `🌀 ${atacante.nombre} activó VPN. Inmunidad a DDoS por 2 turnos.`;
    }

    agregarLog(esAtacanteJugador ? 'player' : 'enemy', msg);
}

function finalizarBatalla(esVictoria) {
    const b = GameState.batalla;
    if (!b) return;
    b.terminada = true;

    if (GameState.espectadorInterval) {
        clearInterval(GameState.espectadorInterval);
        GameState.espectadorInterval = null;
    }

    AudioSystem.play(esVictoria ? 'victory' : 'defeat');

    if (!GameState.isSpectatorMode) {
        const nuevaPartida = {
            id_partida: BaseDatos.partidas.length + 1,
            id_jugador1: GameState.jugadorActual.id_jugador,
            id_jugador2: 99,
            ganador: esVictoria ? GameState.jugadorActual.id_jugador : 99,
            turnos: b.turno,
            fecha: new Date().toISOString().split('T')[0],
            duracion: `${Math.floor(b.turno * 0.4)}:${(b.turno * 24) % 60}`
        };
        BaseDatos.partidas.push(nuevaPartida);

        const jugador = BaseDatos.jugadores.find(jg => jg.id_jugador === GameState.jugadorActual.id_jugador);
        if (jugador) {
            if (esVictoria) {
                jugador.victorias++;
                jugador.experiencia += 150;
            } else {
                jugador.derrotas++;
                jugador.experiencia += 50;
            }
            jugador.partidas_jugadas++;

            const requiredXP = jugador.nivel * 250;
            if (jugador.experiencia >= requiredXP) {
                jugador.experiencia -= requiredXP;
                jugador.nivel++;
                mostrarNotificacion(`¡Felicidades! Subiste al nivel ${jugador.nivel}`, 'success');
            }
        }

        lanzarAlertaDB('trigger', 'trg_ActualizarRanking', `trg_ActualizarRanking: Victorias incrementadas para ID ${GameState.jugadorActual.id_jugador}.`);
        setTimeout(() => {
            lanzarAlertaDB('trigger', 'trg_RegistrarAuditoria', `trg_RegistrarAuditoria: Nueva fila insertada en AuditoriaPartida.`);
            BaseDatos.auditoria.push({
                id_auditoria: BaseDatos.auditoria.length + 1,
                tabla_afectada: 'Partida',
                operacion: 'INSERT',
                usuario_db: GameState.jugadorActual.nombre_usuario,
                fecha: new Date().toISOString().replace('T', ' ').substring(0, 19),
                detalles: `trg_RegistrarAuditoria: Partida finalizada. Ganador: ${esVictoria ? 'Jugador' : 'IA'}.`
            });
        }, 300);
    }

    const modal = document.getElementById('modal-resultado');
    const title = document.getElementById('result-title');
    const subtitle = document.getElementById('result-subtitle');
    const icon = document.getElementById('result-icon');
    const turns = document.getElementById('result-turns');
    const hpLeft = document.getElementById('result-hp-left');
    const xpEarned = document.getElementById('result-xp');

    if (modal) {
        // Stats adicionales
        const statsExtra = document.getElementById('result-stats-extra');
        
        if (GameState.isSpectatorMode) {
            title.textContent = 'SIMULACIÓN COMPLETADA';
            subtitle.textContent = `Vencedor: ${esVictoria ? b.jugador.nombre : b.enemigo.nombre}`;
            icon.textContent = '👁️‍🗨️';
            turns.textContent = b.turno;
            hpLeft.textContent = `${esVictoria ? b.jugador.seguridad : b.enemigo.seguridad}%`;
            xpEarned.textContent = '0 XP (Modo Espectador)';
            if (statsExtra) statsExtra.innerHTML = '';
        } else {
            title.textContent = esVictoria ? '¡VICTORIA EN RED!' : '¡RED COMPROMETIDA!';
            title.style.color = esVictoria ? 'var(--green)' : 'var(--red)';
            subtitle.textContent = esVictoria ? 'Servidor rival neutralizado con éxito.' : 'El malware rival vulneró tus defensas.';
            icon.textContent = esVictoria ? '🏆' : '💀';
            turns.textContent = b.turno;
            hpLeft.textContent = `${esVictoria ? b.jugador.seguridad : b.jugador.seguridad}%`;
            xpEarned.textContent = esVictoria ? '+150 XP' : '+50 XP';
            
            // Stats detalladas post-batalla
            if (statsExtra && b.stats) {
                const topTool = Object.entries(b.stats.herramientasUsadas).sort((a,b) => b[1] - a[1])[0];
                statsExtra.innerHTML = `
                    <div class="result-stat"><span class="label">Daño infligido</span><span class="value" style="color:var(--red);">${b.stats.dañoInfligido}</span></div>
                    <div class="result-stat"><span class="label">Daño recibido</span><span class="value" style="color:var(--rose-light);">${b.stats.dañoRecibido}</span></div>
                    <div class="result-stat"><span class="label">Energía consumida</span><span class="value" style="color:var(--accent);">${b.stats.energiaConsumida}</span></div>
                    <div class="result-stat"><span class="label">Herramienta favorita</span><span class="value" style="color:var(--gold);">${topTool ? topTool[0] + ' (x' + topTool[1] + ')' : '-'}</span></div>
                `;
            }
        }
        modal.classList.add('active');
    }
}

function revancha() {
    cerrarModal();
    if (GameState.isSpectatorMode) {
        iniciarEspectador();
    } else {
        iniciarBatalla();
    }
}

function cerrarModal() {
    const modal = document.getElementById('modal-resultado');
    if (modal) modal.classList.remove('active');
    mostrarPantalla('menu');
}




// ===== LOG DE BATALLA =====
function agregarLog(tipo, mensaje) {
    const b = GameState.batalla;
    const logContainer = document.getElementById('battle-log-entries');

    const entry = document.createElement('div');
    entry.className = `log-entry ${tipo}-action`;
    entry.innerHTML = `<span class="log-turn">T${b.turno}</span><span>${mensaje}</span>`;

    logContainer.insertBefore(entry, logContainer.firstChild);

    // Mantener máximo 50 entradas
    while (logContainer.children.length > 50) {
        logContainer.removeChild(logContainer.lastChild);
    }
}

// ===== ANIMACIONES =====
function animarPanel(target, tipo) {
    const panel = document.querySelector(`.${target === 'player' ? 'player' : 'enemy'}-panel`);
    if (!panel) return;

    panel.classList.remove('attack-anim', 'heal-anim', 'shield-anim', 'shake');

    void panel.offsetWidth; // Force reflow

    if (tipo === 'attack') {
        panel.classList.add('attack-anim', 'shake');
    } else if (tipo === 'heal') {
        panel.classList.add('heal-anim');
    } else if (tipo === 'shield') {
        panel.classList.add('shield-anim');
    }

    setTimeout(() => {
        panel.classList.remove('attack-anim', 'heal-anim', 'shield-anim', 'shake');
    }, 600);
}

// ===== RANKING =====
function renderRanking() {
    const ranking = BaseDatos.getRanking();
    const tbody = document.getElementById('ranking-body');

    tbody.innerHTML = ranking.map((j, i) => {
        let rankClass = '';
        let rankIcon = `#${i + 1}`;
        if (i === 0) { rankClass = 'rank-gold'; rankIcon = '🥇'; }
        else if (i === 1) { rankClass = 'rank-silver'; rankIcon = '🥈'; }
        else if (i === 2) { rankClass = 'rank-bronze'; rankIcon = '🥉'; }

        const esJugadorActual = GameState.jugadorActual && j.id_usuario === GameState.jugadorActual.id_usuario;

        return `
            <tr style="${esJugadorActual ? 'background: rgba(245,166,35,0.06);' : ''}">
                <td class="${rankClass}" style="font-weight:700;">${rankIcon}</td>
                <td style="${esJugadorActual ? 'color: var(--gold);' : ''}">${j.nombre} ${esJugadorActual ? '(Tú)' : ''}</td>
                <td><span class="badge badge-level">Nv. ${j.nivel}</span></td>
                <td style="color: var(--green);">${j.victorias}</td>
                <td style="color: var(--red);">${j.derrotas}</td>
                <td>${j.partidas_jugadas}</td>
                <td style="color: var(--gold);">${j.winrate}%</td>
            </tr>
        `;
    }).join('');
}

// ===== HISTORIAL =====
function renderHistorial() {
    const tbody = document.getElementById('historial-body');

    if (!GameState.jugadorActual) return;

    const historial = BaseDatos.getHistorialJugador(GameState.jugadorActual.id_jugador);

    if (historial.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; color: var(--text-dim);">No hay partidas registradas aún</td></tr>';
        return;
    }

    tbody.innerHTML = historial.map(p => {
        const esVictoria = p.resultado === 'Victoria';
        return `
            <tr>
                <td>${p.fecha}</td>
                <td>${p.rival || GameState.batalla?.enemigo.nombre || 'IA'}</td>
                <td><span class="badge ${esVictoria ? 'badge-win' : 'badge-loss'}">${p.resultado}</span></td>
                <td>${p.turnos}</td>
                <td>${p.duracion}</td>
            </tr>
        `;
    }).join('');
}

// ===== PERFIL =====
function renderPerfil() {
    if (!GameState.jugadorActual) return;
    const j = GameState.jugadorActual;
    const jugadorActualizado = BaseDatos.jugadores.find(jg => jg.id_jugador === j.id_jugador);
    if (jugadorActualizado) Object.assign(j, jugadorActualizado);

    document.getElementById('perfil-nombre').textContent = j.nombre_usuario;
    document.getElementById('perfil-nivel').textContent = `Nivel ${j.nivel} — ${j.experiencia} XP`;
    document.getElementById('perfil-victorias').textContent = j.victorias;
    document.getElementById('perfil-derrotas').textContent = j.derrotas;
    document.getElementById('perfil-partidas').textContent = j.partidas_jugadas;
    document.getElementById('perfil-winrate').textContent = j.partidas_jugadas > 0 ? `${((j.victorias / j.partidas_jugadas) * 100).toFixed(1)}%` : '0%';
    document.getElementById('perfil-fecha').textContent = j.fecha_registro;
    document.getElementById('perfil-xp-next').textContent = `${j.experiencia} / ${j.nivel * 250} XP`;

    // Barra de experiencia
    const xpPercent = (j.experiencia / (j.nivel * 250)) * 100;
    document.getElementById('perfil-xp-bar').style.width = `${Math.min(xpPercent, 100)}%`;

    // Herramientas desbloqueadas
    const toolsList = document.getElementById('perfil-tools');
    toolsList.innerHTML = BaseDatos.herramientas.map(h => {
        const desbloqueada = j.nivel >= h.nivel_req;
        return `
            <div class="tool-unlock ${desbloqueada ? '' : 'locked'}">
                <span class="tool-unlock-icon">${h.icono}</span>
                <span class="tool-unlock-name">${h.nombre}</span>
                <span class="tool-unlock-status" style="color: ${desbloqueada ? 'var(--green)' : 'var(--red)'}">
                    ${desbloqueada ? '✔ Desbloqueada' : `🔒 Nv. ${h.nivel_req}`}
                </span>
            </div>
        `;
    }).join('');
}

// ===== TORNEOS =====
function renderTorneos() {
    const tbody = document.getElementById('torneos-body');

    tbody.innerHTML = BaseDatos.torneos.map(t => {
        const estadoClass = t.estado === 'En curso' ? 'badge-win' : 'badge-loss';
        return `
            <tr>
                <td style="color: var(--gold); font-weight:600;">${t.nombre}</td>
                <td><span class="badge ${estadoClass}">${t.estado}</span></td>
                <td>${t.participantes}</td>
                <td>${t.ganador}</td>
                <td>${t.premio}</td>
                <td>${t.fecha}</td>
            </tr>
        `;
    }).join('');
}

// ===== NOTIFICACIONES =====
function mostrarNotificacion(mensaje, tipo = 'info') {
    const notif = document.createElement('div');
    notif.className = `notification ${tipo}`;
    notif.textContent = mensaje;
    document.body.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}

// ===== LOADING SCREEN =====
function iniciarLoading() {
    const fill = document.querySelector('.loading-fill');
    const text = document.querySelector('.loading-text');
    const messages = [
        'Inicializando sistema...',
        'Cargando módulos de seguridad...',
        'Conectando con servidor...',
        'Cargando herramientas de hackeo...',
        'Verificando integridad de datos...',
        'Sistema listo.'
    ];

    let progress = 0;
    let msgIndex = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 20 + 5;
        if (progress > 100) progress = 100;

        fill.style.width = `${progress}%`;

        if (progress > (msgIndex + 1) * (100 / messages.length) && msgIndex < messages.length - 1) {
            msgIndex++;
            text.textContent = messages[msgIndex];
        }

        if (progress >= 100) {
            clearInterval(interval);
            text.textContent = messages[messages.length - 1];
            setTimeout(() => {
                document.querySelector('.loading-screen').classList.add('hidden');
            }, 500);
        }
    }, 200);
}

// ===== PESTAÑAS DE ADMINISTRACIÓN =====
function cambiarAdminTab(tabName) {
    AudioSystem.play('click');
    document.querySelectorAll('.admin-tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.admin-tab-content').forEach(content => content.style.display = 'none');
    
    document.getElementById(`btn-tab-${tabName}`).classList.add('active');
    document.getElementById(`admin-tab-${tabName}`).style.display = 'block';
    
    if (tabName === 'edit-tools') renderAdminTools();
    if (tabName === 'audit') renderAuditoria();
    if (tabName === 'schema') actualizarEsquemaMeta();
    if (tabName === 'reports') inicializarFiltrosReportes();
}

function renderAdminTools() {
    const list = document.getElementById('admin-tools-edit-list');
    if (!list) return;
    
    list.innerHTML = BaseDatos.herramientas.map(h => {
        return `
            <div class="tool-edit-card glass">
                <div class="tool-edit-avatar">${h.icono}</div>
                <div class="tool-edit-info">
                    <h4 style="font-weight:700; color:var(--text);">${h.nombre}</h4>
                    <span style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase;">${h.tipo}</span>
                    <div class="tool-edit-inputs">
                        <div class="tool-edit-field">
                            <label>Daño</label>
                            <input type="number" value="${h.daño}" onchange="actualizarHerramientaParams(${h.id_herramienta}, 'daño', this.value)">
                        </div>
                        <div class="tool-edit-field">
                            <label>Costo</label>
                            <input type="number" value="${h.costo_energia}" onchange="actualizarHerramientaParams(${h.id_herramienta}, 'costo_energia', this.value)">
                        </div>
                        <div class="tool-edit-field">
                            <label>Cooldown</label>
                            <input type="number" value="${h.cooldown}" onchange="actualizarHerramientaParams(${h.id_herramienta}, 'cooldown', this.value)">
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function actualizarHerramientaParams(id, prop, valor) {
    const h = BaseDatos.herramientas.find(x => x.id_herramienta === id);
    if (!h) return;
    
    const numVal = parseInt(valor);
    if (isNaN(numVal)) return;
    
    h[prop] = numVal;
    AudioSystem.play('click');
    
    // Alerta de sp_ActualizarHerramienta ejecutada
    lanzarAlertaDB('procedure', 'sp_ActualizarHerramienta', `EXEC sp_ActualizarHerramienta @id_herramienta = ${id}, @${prop} = ${numVal};`);
    
    // Auditoría
    BaseDatos.auditoria.push({
        id_auditoria: BaseDatos.auditoria.length + 1,
        tabla_afectada: 'Herramienta',
        operacion: 'UPDATE',
        usuario_db: GameState.jugadorActual ? GameState.jugadorActual.nombre_usuario : 'admin_hb',
        fecha: new Date().toISOString().replace('T', ' ').substring(0, 19),
        detalles: `sp_ActualizarHerramienta: Se actualizó '${prop}' de herramienta ID ${id} (${h.nombre}) a ${numVal}.`
    });
    
    mostrarNotificacion(`Herramienta '${h.nombre}' actualizada`, 'success');
}

function renderAuditoria() {
    const tbody = document.getElementById('admin-audit-body');
    if (!tbody) return;
    
    tbody.innerHTML = BaseDatos.auditoria.map(a => {
        let opClass = 'insert';
        if (a.operacion === 'UPDATE') opClass = 'update';
        if (a.operacion === 'DELETE') opClass = 'delete';
        
        return `
            <tr>
                <td><strong>#${a.id_auditoria}</strong></td>
                <td><span style="font-family:var(--font-mono); font-size:0.75rem;">${a.tabla_afectada}</span></td>
                <td><span class="audit-status-badge ${opClass}">${a.operacion}</span></td>
                <td><span style="color:var(--gold); font-weight:600;">${a.usuario_db}</span></td>
                <td style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">${a.fecha}</td>
                <td style="font-size:0.78rem; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${a.detalles}">${a.detalles}</td>
            </tr>
        `;
    }).reverse().join('');
}

function actualizarEsquemaMeta() {
    document.getElementById('schema-count-usuarios').textContent = `${BaseDatos.usuarios.length} filas`;
    document.getElementById('schema-count-jugadores').textContent = `${BaseDatos.jugadores.length} filas`;
    document.getElementById('schema-count-herramientas').textContent = `${BaseDatos.herramientas.length} filas`;
    document.getElementById('schema-count-partidas').textContent = `${BaseDatos.partidas.length} filas`;
    document.getElementById('schema-count-auditoria').textContent = `${BaseDatos.auditoria.length} filas`;
}

// ===== INTÉRPRETE SQL SIMULADO =====
function setSQLTemplate(sql) {
    const input = document.getElementById('sql-console-input');
    if (input) {
        input.value = sql;
        input.focus();
        ejecutarConsultaSQL();
    }
}

function ejecutarConsultaSQL() {
    const input = document.getElementById('sql-console-input');
    const output = document.getElementById('sql-console-output');
    if (!input || !output) return;
    
    const sql = input.value.trim();
    if (!sql) return;
    
    AudioSystem.play('click');
    
    // Stored Procedure de Consulta SQL
    lanzarAlertaDB('procedure', 'sp_EjecutarConsultaSQL', `EXEC sp_EjecutarConsultaSQL @query = '${sql.replace(/'/g, "''")}';`);
    
    let parsedResult = parsearSQLSimulado(sql);
    
    if (parsedResult.success) {
        output.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <div class="sql-success-msg">✓ Consulta ejecutada correctamente.</div>
                <button class="btn btn-cyan" onclick="exportarTablaExcel('sql-console-output', 'resultado_consulta_sql')" style="padding: 4px 10px; font-size: 0.65rem; height: auto;">📥 Exportar Resultado</button>
            </div>
            <div style="margin-top: 10px; overflow-x: auto;">${parsedResult.html}</div>
            <div style="color:var(--text-muted); font-size:0.7rem; margin-top: 6px;">(${parsedResult.rowsAffected} fila(s) afectadas)</div>
        `;
    } else {
        AudioSystem.play('error');
        output.innerHTML = `
            <div class="sql-error-msg">⚡ Msg ${parsedResult.msgId}, Level 16, State 1, Line 1</div>
            <div style="color:var(--red); font-family:var(--font-mono); font-size:0.8rem; margin-top: 4px;">${parsedResult.error}</div>
        `;
    }
    
    input.value = '';
}

function parsearSQLSimulado(sql) {
    const cleanSql = sql.replace(/\s+/g, ' ').replace(/;$/, '').trim();
    const selectMatch = cleanSql.match(/^SELECT\s+(\*|[\w\s,ñÑáéíóúÁÉÍÓÚ]+)\s+FROM\s+([a-zA-Z0-9_ñÑáéíóúÁÉÍÓÚ]+)(?:\s+WHERE\s+(.+))?$/i);
    const updateMatch = cleanSql.match(/^UPDATE\s+([a-zA-Z0-9_ñÑáéíóúÁÉÍÓÚ]+)\s+SET\s+([a-zA-Z0-9_ñÑáéíóúÁÉÍÓÚ]+)\s*=\s*(.+?)(?:\s+WHERE\s+(.+))?$/i);
    
    if (selectMatch) {
        const tableName = selectMatch[2].toLowerCase();
        let targetArray = null;
        let columns = [];
        
        if (tableName === 'usuario') {
            targetArray = BaseDatos.usuarios;
            columns = ['id_usuario', 'nombre_usuario', 'correo', 'contrasena', 'fecha_registro', 'rol'];
        } else if (tableName === 'jugador') {
            targetArray = BaseDatos.jugadores;
            columns = ['id_jugador', 'id_usuario', 'nivel', 'experiencia', 'victorias', 'derrotas', 'partidas_jugadas'];
        } else if (tableName === 'herramienta') {
            targetArray = BaseDatos.herramientas;
            columns = ['id_herramienta', 'nombre', 'icono', 'tipo', 'daño', 'costo_energia', 'cooldown', 'nivel_req'];
        } else if (tableName === 'partida') {
            targetArray = BaseDatos.partidas;
            columns = ['id_partida', 'id_jugador1', 'id_jugador2', 'ganador', 'turnos', 'fecha', 'duracion'];
        } else if (tableName === 'auditoriapartida') {
            targetArray = BaseDatos.auditoria;
            columns = ['id_auditoria', 'tabla_afectada', 'operacion', 'usuario_db', 'fecha', 'detalles'];
        } else {
            return {
                success: false,
                msgId: 208,
                error: `Invalid object name '${selectMatch[2]}'.`
            };
        }
        
        let rowsHtml = targetArray.map(item => {
            let cells = columns.map(col => {
                let val = item[col];
                if (val === undefined) val = 'NULL';
                return `<td style="padding: 6px 12px; border: 1px solid #1f1a3a;">${val}</td>`;
            }).join('');
            return `<tr>${cells}</tr>`;
        }).join('');
        
        let headersHtml = columns.map(col => `<th style="padding: 6px 12px; border: 1px solid #1f1a3a; background:#16122c; text-align:left; color:var(--gold);">${col}</th>`).join('');
        
        let tableHtml = `
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem; border: 1px solid #1f1a3a; min-width: 500px;">
                <thead><tr>${headersHtml}</tr></thead>
                <tbody>${rowsHtml}</tbody>
            </table>
        `;
        
        return {
            success: true,
            html: tableHtml,
            rowsAffected: targetArray.length
        };
    }
    
    if (updateMatch) {
        const tableName = updateMatch[1].toLowerCase();
        const propName = updateMatch[2].toLowerCase();
        let rawValue = updateMatch[3].trim();
        const whereClause = updateMatch[4];
        
        if (tableName !== 'herramienta') {
            return {
                success: false,
                msgId: 229,
                error: `The UPDATE permission was denied on the object '${updateMatch[1]}', database 'HackBattleDB', schema 'dbo'.`
            };
        }
        
        rawValue = rawValue.replace(/^['"]|['"]$/g, '');
        let parsedVal = parseInt(rawValue);
        if (isNaN(parsedVal)) {
            parsedVal = rawValue;
        }
        
        let realProp = propName;
        if (propName === 'daño' || propName === 'dano') realProp = 'daño';
        else if (propName === 'costo' || propName === 'costo_energia') realProp = 'costo_energia';
        else if (propName === 'cooldown' || propName === 'cd') realProp = 'cooldown';
        
        let filterName = null;
        if (whereClause) {
            const whereMatch = whereClause.match(/(?:nombre|id_herramienta)\s*=\s*(.+)/i);
            if (whereMatch) {
                filterName = whereMatch[1].trim().replace(/^['"]|['"]$/g, '').toLowerCase();
            }
        }
        
        let affected = 0;
        BaseDatos.herramientas.forEach(h => {
            if (!filterName || h.nombre.toLowerCase() === filterName || h.id_herramienta.toString() === filterName) {
                h[realProp] = parsedVal;
                affected++;
            }
        });
        
        if (affected > 0) {
            BaseDatos.auditoria.push({
                id_auditoria: BaseDatos.auditoria.length + 1,
                tabla_afectada: 'Herramienta',
                operacion: 'UPDATE',
                usuario_db: 'admin_hb',
                fecha: new Date().toISOString().replace('T', ' ').substring(0, 19),
                detalles: `SQL Console: UPDATE sobre Herramienta. SET ${realProp} = ${parsedVal}. Filas afectadas: ${affected}.`
            });
            
            lanzarAlertaDB('trigger', 'trg_RegistrarAuditoria', `trg_RegistrarAuditoria: Fila agregada a AuditoriaPartida.`);
            
            return {
                success: true,
                html: `<span style="color:var(--text-soft);">Consulta ejecutada con éxito. ${affected} fila(s) modificada(s).</span>`,
                rowsAffected: affected
            };
        } else {
            return {
                success: true,
                html: `<span style="color:var(--text-muted);">Consulta completada. 0 filas afectadas.</span>`,
                rowsAffected: 0
            };
        }
    }
    
    return {
        success: false,
        msgId: 102,
        error: `Sintaxis incorrecta cerca de '${sql.split(' ')[0]}'. HackBattle SQL Interpreter solo soporta SELECT * FROM [Tabla] y UPDATE Herramienta SET [Col] = [Val] [WHERE nombre='...'].`
    };
}

// ===== INICIALIZACIÓN GENERAL =====
document.addEventListener('DOMContentLoaded', () => {
    iniciarMatrixRain();
    iniciarLoading();

    // Eventos teclado login
    const passInput = document.getElementById('login-password');
    if (passInput) {
        passInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') intentarLogin();
        });
    }
    const userInput = document.getElementById('login-usuario');
    if (userInput) {
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && passInput) passInput.focus();
        });
    }
    
    // Evento teclado SQL Console
    const sqlConsoleInput = document.getElementById('sql-console-input');
    if (sqlConsoleInput) {
        sqlConsoleInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') ejecutarConsultaSQL();
        });
    }
});

// ===== CERTIFICACIÓN DE BASE DE DATOS =====
function abrirCertificado() {
    AudioSystem.play('click');
    const modal = document.getElementById('modal-certificacion');
    if (modal) modal.classList.add('active');
    
    lanzarAlertaDB('procedure', 'sp_VerificarCertificacionBD', `EXEC sp_VerificarCertificacionBD @db = 'HackBattleDB';`);
}

function cerrarCertificado() {
    AudioSystem.play('click');
    const modal = document.getElementById('modal-certificacion');
    if (modal) modal.classList.remove('active');
}

// ===== EXPORTACIÓN A EXCEL (.CSV) =====
function exportarTablaExcel(elementId, nombreArchivo) {
    AudioSystem.play('click');
    const element = document.getElementById(elementId);
    if (!element) {
        mostrarNotificacion('No hay datos para exportar', 'error');
        return;
    }

    let rows = [];
    if (element.tagName.toLowerCase() === 'table') {
        rows = Array.from(element.querySelectorAll('tr'));
    } else if (element.tagName.toLowerCase() === 'tbody') {
        const parentTable = element.closest('table');
        if (parentTable) {
            const headerRow = parentTable.querySelector('thead tr');
            if (headerRow) rows.push(headerRow);
        }
        rows = rows.concat(Array.from(element.querySelectorAll('tr')));
    } else {
        const table = element.querySelector('table');
        if (table) {
            rows = Array.from(table.querySelectorAll('tr'));
        } else {
            rows = Array.from(element.querySelectorAll('tr'));
        }
    }

    if (rows.length === 0) {
        mostrarNotificacion('No se encontraron filas de datos para exportar', 'error');
        return;
    }

    const csvRows = [];
    
    // Configuración para Excel: indicar que el separador es punto y coma (;)
    csvRows.push("sep=;");
    
    // Encabezado profesional de reporte
    csvRows.push(`"=========================================================================="`);
    csvRows.push(`"REPORTE OFICIAL DE BASE DE DATOS - HACKBATTLE ENGINE"`);
    csvRows.push(`"=========================================================================="`);
    csvRows.push(`ORIGEN DE DATOS:;${nombreArchivo.toUpperCase()}`);
    csvRows.push(`GENERADO POR ROL:;${GameState.jugadorActual ? GameState.jugadorActual.nombre_usuario : 'admin_hb'}`);
    csvRows.push(`FECHA Y HORA DE EMISIÓN:;${new Date().toISOString().replace('T', ' ').substring(0, 16)}`);
    csvRows.push(`ESTADO DE SEGURIDAD BD:;CERTIFICADO Y COMPLIANT (ISO/IEC 27001)`);
    csvRows.push(`"=========================================================================="`);

    // DYNAMIC DETAILED STATS SUMMARIES
    if (nombreArchivo === 'ranking_global') {
        const ranking = BaseDatos.getRanking();
        const topHacker = ranking.length > 0 ? ranking[0].nombre : 'Ninguno';
        const totalHackers = ranking.length;
        let sumLevels = 0;
        ranking.forEach(r => sumLevels += r.nivel);
        const avgLevel = totalHackers > 0 ? (sumLevels / totalHackers).toFixed(1) : 0;

        csvRows.push(`"             MÉTRICAS CLAVE DEL RANKING GLOBAL             "`);
        csvRows.push(`"=========================================================================="`);
        csvRows.push(`Total Hackers Registrados:;${totalHackers} hackers`);
        csvRows.push(`Nivel Promedio en Red:;Nv. ${avgLevel}`);
        csvRows.push(`Líder del Ranking (Top 1):;${topHacker}`);
        csvRows.push(`"=========================================================================="`);
    }
    else if (nombreArchivo === 'historial_partidas') {
        if (GameState.jugadorActual) {
            const jgObj = BaseDatos.jugadores.find(j => j.id_usuario === GameState.jugadorActual.id_usuario) || { victorias: 0, derrotas: 0, partidas_jugadas: 0 };
            const winrate = jgObj.partidas_jugadas > 0 ? ((jgObj.victorias / jgObj.partidas_jugadas) * 100).toFixed(1) + "%" : "0.0%";

            csvRows.push(`"             MÉTRICAS DE DESEMPEÑO DEL JUGADOR             "`);
            csvRows.push(`"=========================================================================="`);
            csvRows.push(`Jugador Evaluado:;${GameState.jugadorActual.nombre_usuario}`);
            csvRows.push(`Victorias Registradas:;${jgObj.victorias} victorias`);
            csvRows.push(`Derrotas Sufridas:;${jgObj.derrotas} derrotas`);
            csvRows.push(`Partidas Totales:;${jgObj.partidas_jugadas} partidas`);
            csvRows.push(`Eficacia de Combate (Winrate):;${winrate}`);
            csvRows.push(`"=========================================================================="`);
        }
    }
    else if (nombreArchivo === 'auditoria_transacciones') {
        const totalLogs = BaseDatos.auditoria.length;
        const inserts = BaseDatos.auditoria.filter(a => a.operacion === 'INSERT').length;
        const updates = BaseDatos.auditoria.filter(a => a.operacion === 'UPDATE').length;
        const deletes = BaseDatos.auditoria.filter(a => a.operacion === 'DELETE').length;

        csvRows.push(`"            RESUMEN DE AUDITORÍA DE TRANSACCIONES           "`);
        csvRows.push(`"=========================================================================="`);
        csvRows.push(`Total Transacciones Registradas:;${totalLogs} logs`);
        csvRows.push(`Operaciones INSERT (Creación):;${inserts} filas`);
        csvRows.push(`Operaciones UPDATE (Modificación):;${updates} filas`);
        csvRows.push(`Operaciones DELETE (Eliminación):;${deletes} filas`);
        csvRows.push(`"=========================================================================="`);
    }

    csvRows.push(""); // Línea vacía separatoria antes de la tabla principal

    rows.forEach(row => {
        const cols = Array.from(row.querySelectorAll('th, td'));
        if (cols.length === 0) return;
        const rowData = cols.map(col => {
            let text = col.textContent.trim().replace(/"/g, '""');
            // Quitar emojis del texto para que se vea más profesional en Excel
            text = text.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g, "");
            text = text.trim();
            if (text.includes(';') || text.includes(',') || text.includes('\n')) {
                text = `"${text}"`;
            }
            return text;
        });
        csvRows.push(rowData.join(';'));
    });

    const csvString = csvRows.join('\n');
    
    // Crear Blob con BOM para soportar tildes y caracteres especiales en Excel en Español
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${nombreArchivo}_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    lanzarAlertaDB('procedure', 'sp_ExportarReporteExcel', `EXEC sp_ExportarReporteExcel @origen = '${elementId}', @archivo = '${nombreArchivo}.csv';`);
    mostrarNotificacion(`Reporte ${nombreArchivo}.csv exportado con éxito`, 'success');
}

// ===== REPORTES POR JUGADOR (ADMIN FILTERS & EXPORT) =====

function inicializarFiltrosReportes() {
    const select = document.getElementById('report-player-select');
    if (!select) return;

    const players = BaseDatos.usuarios.filter(u => u.rol === 'player');
    
    select.innerHTML = players.map(p => {
        return `<option value="${p.id_usuario}">${p.nombre_usuario} (ID: ${p.id_usuario})</option>`;
    }).join('');
}

function generarReporteAdministrador() {
    AudioSystem.play('click');
    const playerSelect = document.getElementById('report-player-select');
    const typeSelect = document.getElementById('report-type-select');
    const tableHead = document.getElementById('report-table-head');
    const tableBody = document.getElementById('report-table-body');
    const queryCode = document.getElementById('report-query-code');
    const queryTitle = document.getElementById('report-query-title');

    if (!playerSelect || !typeSelect || !tableHead || !tableBody) return;

    const idUsuario = parseInt(playerSelect.value);
    const reportType = typeSelect.value;
    const userObj = BaseDatos.usuarios.find(u => u.id_usuario === idUsuario);
    if (!userObj) return;

    lanzarAlertaDB('procedure', 'sp_GenerarReporteAuditoria', `EXEC sp_GenerarReporteAuditoria @id_usuario = ${idUsuario}, @tipo = '${reportType}';`);

    let sqlText = '';
    let headHtml = '';
    let bodyHtml = '';

    if (reportType === 'general') {
        sqlText = `<span class="keyword">SELECT</span> u.nombre_usuario, j.nivel, j.experiencia, j.victorias, j.derrotas, j.partidas_jugadas
<span class="keyword">FROM</span> <span class="table">Usuario</span> u 
<span class="keyword">INNER JOIN</span> <span class="table">Jugador</span> j <span class="keyword">ON</span> u.id_usuario = j.id_usuario
<span class="keyword">WHERE</span> u.id_usuario = <span class="variable">${idUsuario}</span>;`;
        
        queryTitle.textContent = 'Consulta: Perfil General';

        headHtml = `<tr><th>Nombre Hacker</th><th>Nivel</th><th>Experiencia</th><th>Victorias</th><th>Derrotas</th><th>Partidas Jugadas</th><th>Winrate</th></tr>`;
        
        const j = BaseDatos.jugadores.find(jg => jg.id_usuario === idUsuario) || { nivel: 1, experiencia: 0, victorias: 0, derrotas: 0, partidas_jugadas: 0 };
        const winrate = j.partidas_jugadas > 0 ? ((j.victorias / j.partidas_jugadas) * 100).toFixed(1) : '0.0';
        
        bodyHtml = `
            <tr>
                <td style="color:var(--accent); font-weight:700;">${userObj.nombre_usuario}</td>
                <td><span class="badge badge-level">Nv. ${j.nivel}</span></td>
                <td>${j.experiencia} XP</td>
                <td style="color:var(--green);">${j.victorias}</td>
                <td style="color:var(--red);">${j.derrotas}</td>
                <td>${j.partidas_jugadas}</td>
                <td style="color:var(--gold); font-weight:600;">${winrate}%</td>
            </tr>
        `;
    } 
    else if (reportType === 'partidas') {
        sqlText = `<span class="keyword">SELECT</span> p.id_partida, p.fecha, u2.nombre_usuario <span class="keyword">AS</span> rival, p.ganador, p.turnos, p.duracion
<span class="keyword">FROM</span> <span class="table">Partida</span> p 
<span class="keyword">INNER JOIN</span> <span class="table">Jugador</span> j <span class="keyword">ON</span> p.id_jugador1 = j.id_jugador
<span class="keyword">INNER JOIN</span> <span class="table">Usuario</span> u2 <span class="keyword">ON</span> p.id_jugador2 = u2.id_usuario
<span class="keyword">WHERE</span> p.id_jugador1 = <span class="variable">${idUsuario}</span> <span class="keyword">OR</span> p.id_jugador2 = <span class="variable">${idUsuario}</span>;`;

        queryTitle.textContent = 'Consulta: Historial de Partidas';

        headHtml = `<tr><th>ID Partida</th><th>Fecha</th><th>Rival</th><th>Resultado</th><th>Turnos</th><th>Duración</th></tr>`;

        const idJugador = idUsuario;
        const partidas = BaseDatos.getHistorialJugador(idJugador);

        if (partidas.length === 0) {
            bodyHtml = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted);">No se encontraron registros de partidas para este jugador.</td></tr>`;
        } else {
            bodyHtml = partidas.map(p => {
                const esVictoria = p.resultado === 'Victoria';
                return `
                    <tr>
                        <td><strong>#${p.id_partida}</strong></td>
                        <td style="font-family:var(--font-mono); font-size:0.75rem;">${p.fecha}</td>
                        <td>${p.rival}</td>
                        <td><span class="audit-status-badge ${esVictoria ? 'insert' : 'delete'}">${p.resultado}</span></td>
                        <td>${p.turnos}</td>
                        <td style="font-family:var(--font-mono); font-size:0.75rem;">${p.duracion}</td>
                    </tr>
                `;
            }).join('');
        }
    } 
    else if (reportType === 'auditoria') {
        sqlText = `<span class="keyword">SELECT</span> id_auditoria, tabla_afectada, operacion, usuario_db, fecha, detalles
<span class="keyword">FROM</span> <span class="table">AuditoriaPartida</span> 
<span class="keyword">WHERE</span> usuario_db = <span class="string">'${userObj.nombre_usuario}'</span>
<span class="keyword">ORDER BY</span> fecha <span class="keyword">DESC</span>;`;

        queryTitle.textContent = 'Consulta: Logs de Auditoría';

        headHtml = `<tr><th>ID</th><th>Tabla Afectada</th><th>Operación</th><th>Hacker</th><th>Fecha</th><th>Detalles</th></tr>`;

        const logs = BaseDatos.auditoria.filter(a => a.usuario_db.toLowerCase() === userObj.nombre_usuario.toLowerCase());

        if (logs.length === 0) {
            bodyHtml = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted);">No se encontraron transacciones auditadas para este usuario.</td></tr>`;
        } else {
            bodyHtml = logs.map(a => {
                let opClass = 'insert';
                if (a.operacion === 'UPDATE') opClass = 'update';
                if (a.operacion === 'DELETE') opClass = 'delete';
                return `
                    <tr>
                        <td><strong>#${a.id_auditoria}</strong></td>
                        <td><span style="font-family:var(--font-mono); font-size:0.75rem;">${a.tabla_afectada}</span></td>
                        <td><span class="audit-status-badge ${opClass}">${a.operacion}</span></td>
                        <td><span style="color:var(--accent); font-weight:600;">${a.usuario_db}</span></td>
                        <td style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">${a.fecha}</td>
                        <td style="font-size:0.78rem; text-align: left;" title="${a.detalles}">${a.detalles}</td>
                    </tr>
                `;
            }).reverse().join('');
        }
    }

    if (queryCode) queryCode.innerHTML = sqlText;
    if (queryTitle) queryTitle.textContent = queryTitle.textContent;
    tableHead.innerHTML = headHtml;
    tableBody.innerHTML = bodyHtml;
}

function exportarReporteAdministradorExcel() {
    const playerSelect = document.getElementById('report-player-select');
    const typeSelect = document.getElementById('report-type-select');
    
    if (!playerSelect || !typeSelect) return;
    
    const idUsuario = parseInt(playerSelect.value);
    const reportType = typeSelect.value;
    const userObj = BaseDatos.usuarios.find(u => u.id_usuario === idUsuario);
    if (!userObj) return;

    const tableId = 'report-data-table';
    const reportName = `reporte_${reportType}_${userObj.nombre_usuario}`;
    
    exportarReportePersonalizadoExcel(tableId, reportName, userObj.nombre_usuario, reportType);
}

function exportarReportePersonalizadoExcel(tableId, filename, playerUsername, type) {
    AudioSystem.play('click');
    const element = document.getElementById(tableId);
    if (!element) {
        mostrarNotificacion('No hay datos para exportar', 'error');
        return;
    }

    const rows = Array.from(element.querySelectorAll('tr'));
    if (rows.length <= 1 && element.querySelector('tbody') && element.querySelector('tbody').textContent.includes('Selecciona')) {
        mostrarNotificacion('Por favor, genera primero el reporte antes de exportarlo.', 'error');
        return;
    }

    const csvRows = [];
    
    // Excel separator directive
    csvRows.push("sep=;");
    
    // Professional corporate report header
    csvRows.push(`"=========================================================================="`);
    csvRows.push(`"REPORTE PERSONALIZADO DE BASE DE DATOS - HACKBATTLE ENGINE"`);
    csvRows.push(`"=========================================================================="`);
    csvRows.push(`HACKER EVALUADO:;${playerUsername.toUpperCase()}`);
    csvRows.push(`TIPO DE CONSULTA:;${type.toUpperCase()}`);
    csvRows.push(`GENERADO POR:;admin_hb (db_owner)`);
    csvRows.push(`FECHA Y HORA DE EMISIÓN:;${new Date().toISOString().replace('T', ' ').substring(0, 16)}`);
    csvRows.push(`ESTADO DE SEGURIDAD BD:;CERTIFICADO Y AUDITADO (ISO/IEC 27001)`);
    csvRows.push(`"=========================================================================="`);

    // Player-specific detailed stats dashboard
    const userObj = BaseDatos.usuarios.find(u => u.nombre_usuario === playerUsername);
    if (userObj) {
        const jugador = BaseDatos.jugadores.find(j => j.id_usuario === userObj.id_usuario);
        
        if (type === 'general' && jugador) {
            const winrate = jugador.partidas_jugadas > 0 ? ((jugador.victorias / jugador.partidas_jugadas) * 100).toFixed(1) : "0.0";
            const ranking = BaseDatos.getRanking();
            const posRanking = ranking.findIndex(r => r.id_jugador === jugador.id_jugador) + 1;

            csvRows.push(`"         DASHBOARD DE PERFIL DEL HACKER          "`);
            csvRows.push(`"=========================================================================="`);
            csvRows.push(`Nombre de Usuario:;${userObj.nombre_usuario}`);
            csvRows.push(`Nombre Completo:;${userObj.nombre_completo || 'No registrado'}`);
            csvRows.push(`Correo Electrónico:;${userObj.email}`);
            csvRows.push(`Rol en el Sistema:;${userObj.rol}`);
            csvRows.push(`Fecha de Registro:;${userObj.fecha_registro || 'N/A'}`);
            csvRows.push(`"=========================================================================="`);
            csvRows.push(`"         ESTADÍSTICAS DE COMBATE         "`);
            csvRows.push(`"=========================================================================="`);
            csvRows.push(`Nivel del Hacker:;Nv. ${jugador.nivel}`);
            csvRows.push(`Victorias Totales:;${jugador.victorias} victorias`);
            csvRows.push(`Derrotas Totales:;${jugador.derrotas} derrotas`);
            csvRows.push(`Partidas Jugadas:;${jugador.partidas_jugadas} partidas`);
            csvRows.push(`Eficacia de Combate (Winrate):;${winrate}%`);
            csvRows.push(`Posición en Ranking Global:;#${posRanking > 0 ? posRanking : 'Sin clasificar'}`);
            csvRows.push(`"=========================================================================="`);
        }
        else if (type === 'partidas' && jugador) {
            const partidasJugador = BaseDatos.partidas.filter(p => p.id_jugador1 === jugador.id_jugador || p.id_jugador2 === jugador.id_jugador);
            const victorias = partidasJugador.filter(p => p.ganador === jugador.id_jugador).length;
            const derrotas = partidasJugador.length - victorias;
            const promedioTurnos = partidasJugador.length > 0 ? (partidasJugador.reduce((sum, p) => sum + (p.turnos || 0), 0) / partidasJugador.length).toFixed(1) : "0";

            csvRows.push(`"         RESUMEN DE HISTORIAL DE PARTIDAS         "`);
            csvRows.push(`"=========================================================================="`);
            csvRows.push(`Total Partidas Registradas:;${partidasJugador.length} partidas`);
            csvRows.push(`Victorias en Historial:;${victorias} victorias`);
            csvRows.push(`Derrotas en Historial:;${derrotas} derrotas`);
            csvRows.push(`Promedio de Turnos por Partida:;${promedioTurnos} turnos`);
            csvRows.push(`"=========================================================================="`);
        }
        else if (type === 'auditoria') {
            const totalLogs = BaseDatos.auditoria.length;
            const inserts = BaseDatos.auditoria.filter(a => a.operacion === 'INSERT').length;
            const updates = BaseDatos.auditoria.filter(a => a.operacion === 'UPDATE').length;
            const deletes = BaseDatos.auditoria.filter(a => a.operacion === 'DELETE').length;
            const tablasAfectadas = [...new Set(BaseDatos.auditoria.map(a => a.tabla_afectada))];

            csvRows.push(`"         RESUMEN DE AUDITORÍA DE TRANSACCIONES         "`);
            csvRows.push(`"=========================================================================="`);
            csvRows.push(`Total Transacciones Registradas:;${totalLogs} logs`);
            csvRows.push(`Operaciones INSERT (Creación):;${inserts} filas`);
            csvRows.push(`Operaciones UPDATE (Modificación):;${updates} filas`);
            csvRows.push(`Operaciones DELETE (Eliminación):;${deletes} filas`);
            csvRows.push(`Tablas Afectadas:;${tablasAfectadas.join(', ')}`);
            csvRows.push(`"=========================================================================="`);
        }
    }

    csvRows.push(""); // Línea vacía separatoria antes de la tabla

    // Parse the table rows
    rows.forEach(row => {
        const cols = Array.from(row.querySelectorAll('th, td'));
        if (cols.length === 0) return;
        
        const rowData = cols.map(col => {
            let text = col.textContent.trim().replace(/"/g, '""');
            text = text.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g, "");
            text = text.trim();
            
            if (text.includes(';') || text.includes(',') || text.includes('\n')) {
                text = `"${text}"`;
            }
            return text;
        });
        csvRows.push(rowData.join(';'));
    });

    const csvString = csvRows.join('\n');
    
    // Save as CSV file with UTF-8 BOM
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${filename}_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    lanzarAlertaDB('procedure', 'sp_ExportarReporteExcel', `EXEC sp_ExportarReporteExcel @origen = '${tableId}', @reporte = '${filename}.csv';`);
    mostrarNotificacion(`Reporte ${filename}.csv descargado con éxito`, 'success');
}

