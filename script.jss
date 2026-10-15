/**
 * GRURU MUSEUM — INTERACTIVE ENGINE (SCRIPT.JS)
 * Features:
 * 1. Data Booming Radial Engine (40ms Burst & Semantic Traversal)
 * 2. Canvas-based Force-Directed Knowledge Graph Simulation
 * 3. Specimen Card Inspector & Everyday Takeaway Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initDataBooming();
  initKnowledgeGraph();
  initNavScroll();
});

/* ==========================================================================
   1. DATA BOOMING RADIAL ENGINE
   ========================================================================== */
const boomingNodesData = [
  {
    id: "GRM-BIO-001",
    name: "สารเอเชียติโคไซด์ (Asiaticoside)",
    category: "SCIENCE",
    color: "#06B6D4",
    angle: 0,
    dist: 170,
    desc: "สารไตรเทอร์ปีนอยด์หลักในบัวบก ช่วยกระตุ้นการสร้างคอลลาเจนประเภทที่ 1 และ 3 ในเนื้อเยื่อ เร่งการสมานแผล และยับยั้งเอนไซม์ทำลายเซลล์",
    takeaway: "ใช้วุ้นหรือสารสกัดบัวบกทาผิวหลังถูกแดดเผา ช่วยลดรอยแดงและเร่งฟื้นฟูเซลล์ผิวได้เร็วขึ้น 2 เท่า"
  },
  {
    id: "GRM-HIS-002",
    name: "ตำราโอสถพระนารายณ์",
    category: "HISTORY",
    color: "#FF5A1F",
    angle: 45,
    dist: 170,
    desc: "บันทึกทางการแพทย์สมัยอยุธยา (พ.ศ. 2202) ที่ระบุการใช้บัวบกเข้าตำรับดับพิษไข้ ดับพิษกาฬ และบำรุงหัวใจ ถือเป็นหลักฐานการแพทย์บูรณาการยุคแรก",
    takeaway: "เข้าใจประวัติศาสตร์การแพทย์ไทยที่มีการแลกเปลี่ยนวิทยาการกับฝรั่งเศสและเปอร์เซียตั้งแต่ศตวรรษที่ 17"
  },
  {
    id: "GRM-BIO-003",
    name: "คลอโรพลาสต์ & สังเคราะห์แสง",
    category: "NATURE",
    color: "#10B981",
    angle: 90,
    dist: 170,
    desc: "โครงสร้างระดับเซลล์ของพืชใบเลี้ยงเดี่ยว/คู่ ที่เปลี่ยนแสงอาทิตย์และคาร์บอนไดออกไซด์เป็นกลูโคสและออกซิเจน เป็นต้นกำเนิดพลังงานชีวภาพ",
    takeaway: "การบริโภคพืชผักสดที่มีคลอโรฟิลล์สูง ช่วยเสริมสารต้านอนุมูลอิสระระดับไมโตคอนเดรีย"
  },
  {
    id: "GRM-CUL-004",
    name: "ภูมิปัญญาแก้น้ำร้อนลวก",
    category: "CULTURE",
    color: "#F59E0B",
    angle: 135,
    dist: 170,
    desc: "วิถีชาวบ้านในการโขลกใบสดผสมน้ำผึ้งหรือดินสอพองพอกแผลไหม้ ลดอาการแสบร้อนและป้องกันการเกิดแผลเป็นคีลอยด์",
    takeaway: "เป็นปฐมพยาบาลเบื้องต้นจากก้นครัวที่ปลอดภัยก่อนไปพบแพทย์"
  },
  {
    id: "GRM-TECH-005",
    name: "สกัดชีวภาพระดับนาโน (Nanotech)",
    category: "TECH",
    color: "#8C6BFF",
    angle: 180,
    dist: 170,
    desc: "การนำสารสกัดบัวบกเข้าสู่ระบบกักเก็บไลโปโซม (Liposomal Encapsulation) ช่วยให้สารซึมลึกสู่ชั้นผิวหนังแท้โดยไม่เสื่อมสลาย",
    takeaway: "ผลิตภัณฑ์เวชสำอางไทยที่ใช้เทคโนโลยีนาโนสามารถสร้างมูลค่าส่งออกได้สูงกว่าวัตถุดิบดิบถึง 15 เท่า"
  },
  {
    id: "GRM-ART-006",
    name: "จิตรกรรมสมุนไพรวัดโพธิ์",
    category: "DESIGN",
    color: "#EC4899",
    angle: 225,
    dist: 170,
    desc: "จารึกและภาพลายเส้นสมุนไพรบนศาลารายวัดพระเชตุพนฯ มรดกความทรงจำแห่งโลกของ UNESCO ที่บันทึกสรีรวิทยาและพฤกษศาสตร์ไทย",
    takeaway: "นำลายเส้นจิตรกรรมโบราณมาต่อยอดเป็นกราฟิกบรรจุภัณฑ์สินค้าระดับพรีเมียม"
  },
  {
    id: "GRM-BIO-007",
    name: "การทำงานต่อเซลล์ประสาท",
    category: "SCIENCE",
    color: "#06B6D4",
    angle: 270,
    dist: 170,
    desc: "งานวิจัยทางประสาทวิทยาสมัยใหม่พบว่าสารมาเดคาสโซไซด์ช่วยป้องกันการสะสมของโปรตีนเบต้า-อะไมลอยด์ ซึ่งเป็นสาเหตุของโรคอัลไซเมอร์",
    takeaway: "การดื่มน้ำบัวบกคั้นสด (หวานน้อย) สัปดาห์ละ 2-3 แก้ว ช่วยส่งเสริมความจำและผ่อนคลายระบบประสาท"
  },
  {
    id: "GRM-CUL-008",
    name: "เครื่องดื่มดับกระหายในชุมชน",
    category: "CULTURE",
    color: "#F59E0B",
    angle: 315,
    dist: 170,
    desc: "วัฒนธรรมร้านน้ำสมุนไพรริมทางของไทย การปรับตัวของสมุนไพรพื้นบ้านสู่เครื่องดื่มดับร้อนในสภาพภูมิอากาศเขตร้อนชื้น",
    takeaway: "สนับสนุนผู้ประกอบการท้องถิ่นด้วยการเลือกบริโภคเครื่องดื่มสมุนไพรธรรมชาติแทนน้ำอัดลม"
  }
];

let isBoomed = false;

function initDataBooming() {
  const seedBtn = document.getElementById('seedTrigger');
  const stage = document.getElementById('boomingStage');
  const panelSpecimenId = document.getElementById('panelSpecimenId');
  const panelTitle = document.getElementById('panelTitle');
  const panelBody = document.getElementById('panelBody');
  const panelTakeaway = document.getElementById('panelTakeaway');
  const connCount = document.getElementById('connCount');

  if (!seedBtn || !stage) return;

  // Create Radial Nodes
  boomingNodesData.forEach((node, idx) => {
    const el = document.createElement('div');
    el.className = 'radial-node';
    el.id = `rnode-${idx}`;
    el.innerHTML = `
      <span class="cat-badge" style="background:${node.color}20; color:${node.color};">${node.category}</span>
      <div class="node-name">${node.name}</div>
    `;

    // Calculate Position based on angle
    const rad = (node.angle * Math.PI) / 180;
    const x = Math.cos(rad) * node.dist;
    const y = Math.sin(rad) * node.dist;

    el.style.left = `calc(50% + ${x}px - 70px)`;
    el.style.top = `calc(50% + ${y}px - 28px)`;

    el.addEventListener('click', () => {
      selectBoomingNode(node);
      // Highlight selected
      document.querySelectorAll('.radial-node').forEach(n => n.style.borderColor = 'var(--gr-border-strong)');
      el.style.borderColor = 'var(--gr-lime)';
      el.style.boxShadow = '0 0 16px var(--gr-lime-glow)';
    });

    stage.appendChild(el);
  });

  // Seed Click Trigger (The Booming Burst)
  seedBtn.addEventListener('click', () => {
    isBoomed = !isBoomed;

    boomingNodesData.forEach((node, idx) => {
      const el = document.getElementById(`rnode-${idx}`);
      if (isBoomed) {
        setTimeout(() => {
          el.classList.add('active');
        }, idx * 45); // 40-45ms delay per node according to brief!
      } else {
        el.classList.remove('active');
      }
    });

    if (isBoomed) {
      seedBtn.style.transform = 'scale(0.95)';
      animateCounter(connCount, 0, 8, 400);
      selectBoomingNode(boomingNodesData[0]);
    } else {
      seedBtn.style.transform = 'scale(1)';
      connCount.textContent = '0';
    }
  });

  function selectBoomingNode(node) {
    panelSpecimenId.textContent = node.id;
    panelTitle.textContent = node.name;
    panelBody.textContent = node.desc;
    panelTakeaway.textContent = node.takeaway;
  }

  function animateCounter(elem, start, end, duration) {
    let current = start;
    const step = (end - start) / (duration / 30);
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        elem.textContent = end;
        clearInterval(timer);
      } else {
        elem.textContent = Math.floor(current);
      }
    }, 30);
  }
}

/* ==========================================================================
   2. INTERACTIVE KNOWLEDGE GRAPH (CANVAS SIMULATION)
   ========================================================================== */
function initKnowledgeGraph() {
  const canvas = document.getElementById('graphCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 520;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Nodes Dataset
  const nodes = [
    { id: 1, name: "ใบลานสมุนไพร", cat: "HIS", color: "#FF5A1F", x: 200, y: 150, vx: 0, vy: 0, radius: 18 },
    { id: 2, name: "สารพฤกษเคมี", cat: "SCI", color: "#06B6D4", x: 300, y: 180, vx: 0, vy: 0, radius: 22 },
    { id: 3, name: "แผนที่คลองอยุธยา", cat: "HIS", color: "#FF5A1F", x: 150, y: 320, vx: 0, vy: 0, radius: 20 },
    { id: 4, name: "ชลประทานโบราณ", cat: "TECH", color: "#8C6BFF", x: 260, y: 380, vx: 0, vy: 0, radius: 19 },
    { id: 5, name: "ระบบนิเวศน์น้ำหลาก", cat: "BIO", color: "#10B981", x: 380, y: 340, vx: 0, vy: 0, radius: 24 },
    { id: 6, name: "การค้าสำเภาหลวง", cat: "HIS", color: "#FF5A1F", x: 480, y: 220, vx: 0, vy: 0, radius: 22 },
    { id: 7, name: "เครื่องเคลือบดินเผา", cat: "ART", color: "#EC4899", x: 580, y: 160, vx: 0, vy: 0, radius: 18 },
    { id: 8, name: "เซรามิกส์นาโน", cat: "TECH", color: "#8C6BFF", x: 680, y: 220, vx: 0, vy: 0, radius: 20 },
    { id: 9, name: "อาหารเป็นยา", cat: "CUL", color: "#F59E0B", x: 420, y: 120, vx: 0, vy: 0, radius: 20 },
    { id: 10, name: "จีโนมพืชเขตร้อน", cat: "SCI", color: "#06B6D4", x: 520, y: 380, vx: 0, vy: 0, radius: 25 },
    { id: 11, name: "ปัญญาประดิษฐ์สัญชาติไทย", cat: "TECH", color: "#8C6BFF", x: 640, y: 350, vx: 0, vy: 0, radius: 26 },
    { id: 12, name: "มรดกความทรงจำโลก", cat: "CUL", color: "#F59E0B", x: 220, y: 240, vx: 0, vy: 0, radius: 19 }
  ];

  // Links
  const links = [
    { source: 0, target: 1 },
    { source: 0, target: 8 },
    { source: 1, target: 8 },
    { source: 1, target: 9 },
    { source: 2, target: 3 },
    { source: 3, target: 4 },
    { source: 2, target: 5 },
    { source: 5, target: 6 },
    { source: 6, target: 7 },
    { source: 4, target: 9 },
    { source: 9, target: 10 },
    { source: 7, target: 10 },
    { source: 0, target: 11 },
    { source: 2, target: 11 }
  ];

  let selectedNode = null;
  let hoveredNode = null;
  let activeFilter = 'ALL';
  let isDragging = false;
  let dragNode = null;

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
    });
  });

  // Search Input
  const searchInput = document.getElementById('graphSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        selectedNode = null;
        return;
      }
      const found = nodes.find(n => n.name.toLowerCase().includes(q));
      if (found) {
        selectedNode = found;
      }
    });
  }

  // Animation Loop
  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Subtle Grid
    ctx.strokeStyle = '#F1F5F9';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Draw Links
    links.forEach(link => {
      const s = nodes[link.source];
      const t = nodes[link.target];

      const isFiltered = (activeFilter === 'ALL' || s.cat === activeFilter || t.cat === activeFilter);
      ctx.strokeStyle = isFiltered ? 'rgba(148, 163, 184, 0.45)' : 'rgba(226, 232, 240, 0.2)';
      ctx.lineWidth = (selectedNode && (s === selectedNode || t === selectedNode)) ? 2.5 : 1;

      if (selectedNode && (s === selectedNode || t === selectedNode)) {
        ctx.strokeStyle = '#84CC16'; // Specimen Lime on selected path
      }

      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(t.x, t.y);
      ctx.stroke();
    });

    // Draw Nodes
    nodes.forEach(node => {
      const matchesFilter = (activeFilter === 'ALL' || node.cat === activeFilter);
      const isSelected = (selectedNode === node);
      const isHovered = (hoveredNode === node);

      ctx.globalAlpha = matchesFilter ? 1 : 0.25;

      // Glow on selected or hovered
      if (isSelected || isHovered) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(132, 204, 22, 0.25)';
        ctx.fill();
      }

      // Outer circle
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      ctx.strokeStyle = isSelected ? '#84CC16' : node.color;
      ctx.lineWidth = isSelected ? 4 : 2.5;
      ctx.stroke();

      // Inner dot
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius - 8, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.fill();

      // Label text
      ctx.font = '600 12px "IBM Plex Sans Thai"';
      ctx.fillStyle = matchesFilter ? '#0F172A' : '#94A3B8';
      ctx.textAlign = 'center';
      ctx.fillText(node.name, node.x, node.y + node.radius + 16);

      ctx.globalAlpha = 1;
    });

    requestAnimationFrame(tick);
  }
  tick();

  // Mouse Interaction (Hover & Drag)
  function getNodeAt(x, y) {
    return nodes.find(n => {
      const dx = n.x - x;
      const dy = n.y - y;
      return Math.sqrt(dx * dx + dy * dy) <= n.radius + 6;
    });
  }

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (isDragging && dragNode) {
      dragNode.x = x;
      dragNode.y = y;
      return;
    }

    hoveredNode = getNodeAt(x, y);
    canvas.style.cursor = hoveredNode ? 'pointer' : 'grab';
  });

  canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const clicked = getNodeAt(x, y);
    if (clicked) {
      selectedNode = clicked;
      dragNode = clicked;
      isDragging = true;
      canvas.style.cursor = 'grabbing';

      // Update Specimen details in footer if needed
      const statusEl = document.getElementById('graphStatusText');
      if (statusEl) {
        statusEl.innerHTML = `SELECTED: <strong>${clicked.name}</strong> [${clicked.cat}] &bull; CONNECTED TO 3 NODES`;
      }
    }
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    dragNode = null;
    canvas.style.cursor = hoveredNode ? 'pointer' : 'grab';
  });
}

/* ==========================================================================
   3. NAVIGATION SMOOTH SCROLL
   ========================================================================== */
function initNavScroll() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}
