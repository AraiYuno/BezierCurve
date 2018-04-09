//Teapot
var numVertices = 306;
var vertices = [
vec3(1.4 , 0.0 , 2.4),
vec3(1.4 , -0.784 , 2.4),
vec3(0.784 , -1.4 , 2.4),
vec3(0.0 , -1.4 , 2.4),
vec3(1.3375 , 0.0 , 2.53125),
vec3(1.3375 , -0.749 , 2.53125),
vec3(0.749 , -1.3375 , 2.53125),
vec3(0.0 , -1.3375 , 2.53125),
vec3(1.4375 , 0.0 , 2.53125),
vec3(1.4375 , -0.805 , 2.53125),
vec3(0.805 , -1.4375 , 2.53125),
vec3(0.0 , -1.4375 , 2.53125),
vec3(1.5 , 0.0 , 2.4),
vec3(1.5 , -0.84 , 2.4),
vec3(0.84 , -1.5 , 2.4),
vec3(0.0 , -1.5 , 2.4),
vec3(-0.784 , -1.4 , 2.4),
vec3(-1.4 , -0.784 , 2.4),
vec3(-1.4 , 0.0 , 2.4),
vec3(-0.749 , -1.3375 , 2.53125),
vec3(-1.3375 , -0.749 , 2.53125),
vec3(-1.3375 , 0.0 , 2.53125),
vec3(-0.805 , -1.4375 , 2.53125),
vec3(-1.4375 , -0.805 , 2.53125),
vec3(-1.4375 , 0.0 , 2.53125),
vec3(-0.84 , -1.5 , 2.4),
vec3(-1.5 , -0.84 , 2.4),
vec3(-1.5 , 0.0 , 2.4),
vec3(-1.4 , 0.784 , 2.4),
vec3(-0.784 , 1.4 , 2.4),
vec3(0.0 , 1.4 , 2.4),
vec3(-1.3375 , 0.749 , 2.53125),
vec3(-0.749 , 1.3375 , 2.53125),
vec3(0.0 , 1.3375 , 2.53125),
vec3(-1.4375 , 0.805 , 2.53125),
vec3(-0.805 , 1.4375 , 2.53125),
vec3(0.0 , 1.4375 , 2.53125),
vec3(-1.5 , 0.84 , 2.4),
vec3(-0.84 , 1.5 , 2.4),
vec3(0.0 , 1.5 , 2.4),
vec3(0.784 , 1.4 , 2.4),
vec3(1.4 , 0.784 , 2.4),
vec3(0.749 , 1.3375 , 2.53125),
vec3(1.3375 , 0.749 , 2.53125),
vec3(0.805 , 1.4375 , 2.53125),
vec3(1.4375 , 0.805 , 2.53125),
vec3(0.84 , 1.5 , 2.4),
vec3(1.5 , 0.84 , 2.4),
vec3(1.75 , 0.0 , 1.875),
vec3(1.75 , -0.98 , 1.875),
vec3(0.98 , -1.75 , 1.875),
vec3(0.0 , -1.75 , 1.875),
vec3(2.0 , 0.0 , 1.35),
vec3(2.0 , -1.12 , 1.35),
vec3(1.12 , -2.0 , 1.35),
vec3(0.0 , -2.0 , 1.35),
vec3(2.0 , 0.0 , 0.9),
vec3(2.0 , -1.12 , 0.9),
vec3(1.12 , -2.0 , 0.9),
vec3(0.0 , -2.0 , 0.9),
vec3(-0.98 , -1.75 , 1.875),
vec3(-1.75 , -0.98 , 1.875),
vec3(-1.75 , 0.0 , 1.875),
vec3(-1.12 , -2.0 , 1.35),
vec3(-2.0 , -1.12 , 1.35),
vec3(-2.0 , 0.0 , 1.35),
vec3(-1.12 , -2.0 , 0.9),
vec3(-2.0 , -1.12 , 0.9),
vec3(-2.0 , 0.0 , 0.9),
vec3(-1.75 , 0.98 , 1.875),
vec3(-0.98 , 1.75 , 1.875),
vec3(0.0 , 1.75 , 1.875),
vec3(-2.0 , 1.12 , 1.35),
vec3(-1.12 , 2.0 , 1.35),
vec3(0.0 , 2.0 , 1.35),
vec3(-2.0 , 1.12 , 0.9),
vec3(-1.12 , 2.0 , 0.9),
vec3(0.0 , 2.0 , 0.9),
vec3(0.98 , 1.75 , 1.875),
vec3(1.75 , 0.98 , 1.875),
vec3(1.12 , 2.0 , 1.35),
vec3(2.0 , 1.12 , 1.35),
vec3(1.12 , 2.0 , 0.9),
vec3(2.0 , 1.12 , 0.9),
vec3(2.0 , 0.0 , 0.45),
vec3(2.0 , -1.12 , 0.45),
vec3(1.12 , -2.0 , 0.45),
vec3(0.0 , -2.0 , 0.45),
vec3(1.5 , 0.0 , 0.225),
vec3(1.5 , -0.84 , 0.225),
vec3(0.84 , -1.5 , 0.225),
vec3(0.0 , -1.5 , 0.225),
vec3(1.5 , 0.0 , 0.15),
vec3(1.5 , -0.84 , 0.15),
vec3(0.84 , -1.5 , 0.15),
vec3(0.0 , -1.5 , 0.15),
vec3(-1.12 , -2.0 , 0.45),
vec3(-2.0 , -1.12 , 0.45),
vec3(-2.0 , 0.0 , 0.45),
vec3(-0.84 , -1.5 , 0.225),
vec3(-1.5 , -0.84 , 0.225),
vec3(-1.5 , 0.0 , 0.225),
vec3(-0.84 , -1.5 , 0.15),
vec3(-1.5 , -0.84 , 0.15),
vec3(-1.5 , 0.0 , 0.15),
vec3(-2.0 , 1.12 , 0.45),
vec3(-1.12 , 2.0 , 0.45),
vec3(0.0 , 2.0 , 0.45),
vec3(-1.5 , 0.84 , 0.225),
vec3(-0.84 , 1.5 , 0.225),
vec3(0.0 , 1.5 , 0.225),
vec3(-1.5 , 0.84 , 0.15),
vec3(-0.84 , 1.5 , 0.15),
vec3(0.0 , 1.5 , 0.15),
vec3(1.12 , 2.0 , 0.45),
vec3(2.0 , 1.12 , 0.45),
vec3(0.84 , 1.5 , 0.225),
vec3(1.5 , 0.84 , 0.225),
vec3(0.84 , 1.5 , 0.15),
vec3(1.5 , 0.84 , 0.15),
vec3(-1.6 , 0.0 , 2.025),
vec3(-1.6 , -0.3 , 2.025),
vec3(-1.5 , -0.3 , 2.25),
vec3(-1.5 , 0.0 , 2.25),
vec3(-2.3 , 0.0 , 2.025),
vec3(-2.3 , -0.3 , 2.025),
vec3(-2.5 , -0.3 , 2.25),
vec3(-2.5 , 0.0 , 2.25),
vec3(-2.7 , 0.0 , 2.025),
vec3(-2.7 , -0.3 , 2.025),
vec3(-3.0 , -0.3 , 2.25),
vec3(-3.0 , 0.0 , 2.25),
vec3(-2.7 , 0.0 , 1.8),
vec3(-2.7 , -0.3 , 1.8),
vec3(-3.0 , -0.3 , 1.8),
vec3(-3.0 , 0.0 , 1.8),
vec3(-1.5 , 0.3 , 2.25),
vec3(-1.6 , 0.3 , 2.025),
vec3(-2.5 , 0.3 , 2.25),
vec3(-2.3 , 0.3 , 2.025),
vec3(-3.0 , 0.3 , 2.25),
vec3(-2.7 , 0.3 , 2.025),
vec3(-3.0 , 0.3 , 1.8),
vec3(-2.7 , 0.3 , 1.8),
vec3(-2.7 , 0.0 , 1.575),
vec3(-2.7 , -0.3 , 1.575),
vec3(-3.0 , -0.3 , 1.35),
vec3(-3.0 , 0.0 , 1.35),
vec3(-2.5 , 0.0 , 1.125),
vec3(-2.5 , -0.3 , 1.125),
vec3(-2.65 , -0.3 , 0.9375),
vec3(-2.65 , 0.0 , 0.9375),
vec3(-2.0 , -0.3 , 0.9),
vec3(-1.9 , -0.3 , 0.6),
vec3(-1.9 , 0.0 , 0.6),
vec3(-3.0 , 0.3 , 1.35),
vec3(-2.7 , 0.3 , 1.575),
vec3(-2.65 , 0.3 , 0.9375),
vec3(-2.5 , 0.3 , 1.125),
vec3(-1.9 , 0.3 , 0.6),
vec3(-2.0 , 0.3 , 0.9),
vec3(1.7 , 0.0 , 1.425),
vec3(1.7 , -0.66 , 1.425),
vec3(1.7 , -0.66 , 0.6),
vec3(1.7 , 0.0 , 0.6),
vec3(2.6 , 0.0 , 1.425),
vec3(2.6 , -0.66 , 1.425),
vec3(3.1 , -0.66 , 0.825),
vec3(3.1 , 0.0 , 0.825),
vec3(2.3 , 0.0 , 2.1),
vec3(2.3 , -0.25 , 2.1),
vec3(2.4 , -0.25 , 2.025),
vec3(2.4 , 0.0 , 2.025),
vec3(2.7 , 0.0 , 2.4),
vec3(2.7 , -0.25 , 2.4),
vec3(3.3 , -0.25 , 2.4),
vec3(3.3 , 0.0 , 2.4),
vec3(1.7 , 0.66 , 0.6),
vec3(1.7 , 0.66 , 1.425),
vec3(3.1 , 0.66 , 0.825),
vec3(2.6 , 0.66 , 1.425),
vec3(2.4 , 0.25 , 2.025),
vec3(2.3 , 0.25 , 2.1),
vec3(3.3 , 0.25 , 2.4),
vec3(2.7 , 0.25 , 2.4),
vec3(2.8 , 0.0 , 2.475),
vec3(2.8 , -0.25 , 2.475),
vec3(3.525 , -0.25 , 2.49375),
vec3(3.525 , 0.0 , 2.49375),
vec3(2.9 , 0.0 , 2.475),
vec3(2.9 , -0.15 , 2.475),
vec3(3.45 , -0.15 , 2.5125),
vec3(3.45 , 0.0 , 2.5125),
vec3(2.8 , 0.0 , 2.4),
vec3(2.8 , -0.15 , 2.4),
vec3(3.2 , -0.15 , 2.4),
vec3(3.2 , 0.0 , 2.4),
vec3(3.525 , 0.25 , 2.49375),
vec3(2.8 , 0.25 , 2.475),
vec3(3.45 , 0.15 , 2.5125),
vec3(2.9 , 0.15 , 2.475),
vec3(3.2 , 0.15 , 2.4),
vec3(2.8 , 0.15 , 2.4),
vec3(0.0 , 0.0 , 3.15),
vec3(0.0 , -0.002 , 3.15),
vec3(0.002 , 0.0 , 3.15),
vec3(0.8 , 0.0 , 3.15),
vec3(0.8 , -0.45 , 3.15),
vec3(0.45 , -0.8 , 3.15),
vec3(0.0 , -0.8 , 3.15),
vec3(0.0 , 0.0 , 2.85),
vec3(0.2 , 0.0 , 2.7),
vec3(0.2 , -0.112 , 2.7),
vec3(0.112 , -0.2 , 2.7),
vec3(0.0 , -0.2 , 2.7),
vec3(-0.002 , 0.0 , 3.15),
vec3(-0.45 , -0.8 , 3.15),
vec3(-0.8 , -0.45 , 3.15),
vec3(-0.8 , 0.0 , 3.15),
vec3(-0.112 , -0.2 , 2.7),
vec3(-0.2 , -0.112 , 2.7),
vec3(-0.2 , 0.0 , 2.7),
vec3(0.0 , 0.002 , 3.15),
vec3(-0.8 , 0.45 , 3.15),
vec3(-0.45 , 0.8 , 3.15),
vec3(0.0 , 0.8 , 3.15),
vec3(-0.2 , 0.112 , 2.7),
vec3(-0.112 , 0.2 , 2.7),
vec3(0.0 , 0.2 , 2.7),
vec3(0.45 , 0.8 , 3.15),
vec3(0.8 , 0.45 , 3.15),
vec3(0.112 , 0.2 , 2.7),
vec3(0.2 , 0.112 , 2.7),
vec3(0.4 , 0.0 , 2.55),
vec3(0.4 , -0.224 , 2.55),
vec3(0.224 , -0.4 , 2.55),
vec3(0.0 , -0.4 , 2.55),
vec3(1.3 , 0.0 , 2.55),
vec3(1.3 , -0.728 , 2.55),
vec3(0.728 , -1.3 , 2.55),
vec3(0.0 , -1.3 , 2.55),
vec3(1.3 , 0.0 , 2.4),
vec3(1.3 , -0.728 , 2.4),
vec3(0.728 , -1.3 , 2.4),
vec3(0.0 , -1.3 , 2.4),
vec3(-0.224 , -0.4 , 2.55),
vec3(-0.4 , -0.224 , 2.55),
vec3(-0.4 , 0.0 , 2.55),
vec3(-0.728 , -1.3 , 2.55),
vec3(-1.3 , -0.728 , 2.55),
vec3(-1.3 , 0.0 , 2.55),
vec3(-0.728 , -1.3 , 2.4),
vec3(-1.3 , -0.728 , 2.4),
vec3(-1.3 , 0.0 , 2.4),
vec3(-0.4 , 0.224 , 2.55),
vec3(-0.224 , 0.4 , 2.55),
vec3(0.0 , 0.4 , 2.55),
vec3(-1.3 , 0.728 , 2.55),
vec3(-0.728 , 1.3 , 2.55),
vec3(0.0 , 1.3 , 2.55),
vec3(-1.3 , 0.728 , 2.4),
vec3(-0.728 , 1.3 , 2.4),
vec3(0.0 , 1.3 , 2.4),
vec3(0.224 , 0.4 , 2.55),
vec3(0.4 , 0.224 , 2.55),
vec3(0.728 , 1.3 , 2.55),
vec3(1.3 , 0.728 , 2.55),
vec3(0.728 , 1.3 , 2.4),
vec3(1.3 , 0.728 , 2.4),
vec3(0.0 , 0.0 , 0.0),
vec3(1.5 , 0.0 , 0.15),
vec3(1.5 , 0.84 , 0.15),
vec3(0.84 , 1.5 , 0.15),
vec3(0.0 , 1.5 , 0.15),
vec3(1.5 , 0.0 , 0.075),
vec3(1.5 , 0.84 , 0.075),
vec3(0.84 , 1.5 , 0.075),
vec3(0.0 , 1.5 , 0.075),
vec3(1.425 , 0.0 , 0.0),
vec3(1.425 , 0.798 , 0.0),
vec3(0.798 , 1.425 , 0.0),
vec3(0.0 , 1.425 , 0.0),
vec3(-0.84 , 1.5 , 0.15),
vec3(-1.5 , 0.84 , 0.15),
vec3(-1.5 , 0.0 , 0.15),
vec3(-0.84 , 1.5 , 0.075),
vec3(-1.5 , 0.84 , 0.075),
vec3(-1.5 , 0.0 , 0.075),
vec3(-0.798 , 1.425 , 0.0),
vec3(-1.425 , 0.798 , 0.0),
vec3(-1.425 , 0.0 , 0.0),
vec3(-1.5 , -0.84 , 0.15),
vec3(-0.84 , -1.5 , 0.15),
vec3(0.0 , -1.5 , 0.15),
vec3(-1.5 , -0.84 , 0.075),
vec3(-0.84 , -1.5 , 0.075),
vec3(0.0 , -1.5 , 0.075),
vec3(-1.425 , -0.798 , 0.0),
vec3(-0.798 , -1.425 , 0.0),
vec3(0.0 , -1.425 , 0.0),
vec3(0.84 , -1.5 , 0.15),
vec3(1.5 , -0.84 , 0.15),
vec3(0.84 , -1.5 , 0.075),
vec3(1.5 , -0.84 , 0.075),
vec3(0.798 , -1.425 , 0.0),
vec3(1.425 , -0.798 , 0.0) 
];







// // tea spoon
// var numVertices = 256;
// var vertices = [
//     vec3(-0.000107143,0.205357,0.0),
// vec3(0.0,0.196429,-0.0178571),
// vec3(0.0,0.196429,-0.0178571),
// vec3(0.000107143,0.205357,0.0),
// vec3(-0.0535714,0.205357,0.0),
// vec3(-0.0222714,0.178571,-0.0534286),
// vec3(0.0222714,0.178571,-0.0534286),
// vec3(0.0535714,0.205357,0.0),
// vec3(-0.107143,0.0952429,-0.0178571),
// vec3(-0.0446429,0.0952429,-0.0892857),
// vec3(0.0446429,0.0952429,-0.0892857),
// vec3(0.107143,0.0952429,-0.0178571),
// vec3(-0.107143,0.0,-0.0178571),
// vec3(-0.0446429,0.0,-0.0892857),
// vec3(0.0446429,0.0,-0.0892857),
// vec3(0.107143,0.0,-0.0178571),
// vec3(0.000107143,0.205357,0.0),
// vec3(0.000135714,0.207589,0.00446429),
// vec3(0.000157143,0.216518,0.00446429),
// vec3(0.000125,0.214286,0.0),
// vec3(0.0535714,0.205357,0.0),
// vec3(0.0613964,0.212054,0.0133571),
// vec3(0.0714286,0.220982,0.015625),
// vec3(0.0625,0.214286,0.0),
// vec3(0.107143,0.0952429,-0.0178571),
// vec3(0.122768,0.0952429,0.0),
// vec3(0.142857,0.0952429,0.00446429),
// vec3(0.125,0.0952429,-0.0178571),
// vec3(0.107143,0.0,-0.0178571),
// vec3(0.122768,0.0,0.0),
// vec3(0.142857,0.0,0.00446429),
// vec3(0.125,0.0,-0.0178571),
// vec3(0.000125,0.214286,0.0),
// vec3(0.0,0.205357,-0.0178571),
// vec3(0.0,0.205357,-0.0178571),
// vec3(-0.000125,0.214286,0.0),
// vec3(0.0625,0.214286,0.0),
// vec3(0.0267857,0.1875,-0.0625),
// vec3(-0.0267857,0.1875,-0.0625),
// vec3(-0.0625,0.214286,0.0),
// vec3(0.125,0.0952429,-0.0178571),
// vec3(0.0535714,0.0952429,-0.107143),
// vec3(-0.0535714,0.0952429,-0.107143),
// vec3(-0.125,0.0952429,-0.0178571),
// vec3(0.125,0.0,-0.0178571),
// vec3(0.0535714,0.0,-0.107143),
// vec3(-0.0535714,0.0,-0.107143),
// vec3(-0.125,0.0,-0.0178571),
// vec3(-0.000125,0.214286,0.0),
// vec3(-0.000157143,0.216518,0.00446429),
// vec3(-0.000135714,0.207589,0.00446429),
// vec3(-0.000107143,0.205357,0.0),
// vec3(-0.0625,0.214286,0.0),
// vec3(-0.0714286,0.220982,0.015625),
// vec3(-0.0613964,0.212054,0.0133571),
// vec3(-0.0535714,0.205357,0.0),
// vec3(-0.125,0.0952429,-0.0178571),
// vec3(-0.142857,0.0952429,0.00446429),
// vec3(-0.122768,0.0952429,0.0),
// vec3(-0.107143,0.0952429,-0.0178571),
// vec3(-0.125,0.0,-0.0178571),
// vec3(-0.142857,0.0,0.00446429),
// vec3(-0.122768,0.0,0.0),
// vec3(-0.107143,0.0,-0.0178571),
// vec3(-0.107143,0.0,-0.0178571),
// vec3(-0.0446429,0.0,-0.0892857),
// vec3(0.0446429,0.0,-0.0892857),
// vec3(0.107143,0.0,-0.0178571),
// vec3(-0.107143,-0.142857,-0.0178571),
// vec3(-0.0446429,-0.142857,-0.0892857),
// vec3(0.0446429,-0.142857,-0.0892857),
// vec3(0.107143,-0.142857,-0.0178571),
// vec3(-0.0133929,-0.160714,0.0386893),
// vec3(-0.00557857,-0.160714,0.0386893),
// vec3(0.00557857,-0.160714,0.0386893),
// vec3(0.0133929,-0.160714,0.0386893),
// vec3(-0.0133929,-0.25,0.0535714),
// vec3(-0.00557857,-0.25,0.0535714),
// vec3(0.00557857,-0.25,0.0535714),
// vec3(0.0133929,-0.25,0.0535714),
// vec3(0.107143,0.0,-0.0178571),
// vec3(0.122768,0.0,0.0),
// vec3(0.142857,0.0,0.00446429),
// vec3(0.125,0.0,-0.0178571),
// vec3(0.107143,-0.142857,-0.0178571),
// vec3(0.122768,-0.142857,0.0),
// vec3(0.142857,-0.142857,0.00446429),
// vec3(0.125,-0.142857,-0.0178571),
// vec3(0.0133929,-0.160714,0.0386893),
// vec3(0.0153464,-0.160714,0.0386893),
// vec3(0.0178571,-0.160714,0.0314357),
// vec3(0.015625,-0.160714,0.0297607),
// vec3(0.0133929,-0.25,0.0535714),
// vec3(0.0153464,-0.25,0.0535714),
// vec3(0.0178571,-0.25,0.0463179),
// vec3(0.015625,-0.25,0.0446429),
// vec3(0.125,0.0,-0.0178571),
// vec3(0.0535714,0.0,-0.107143),
// vec3(-0.0535714,0.0,-0.107143),
// vec3(-0.125,0.0,-0.0178571),
// vec3(0.125,-0.142857,-0.0178571),
// vec3(0.0535714,-0.142857,-0.107143),
// vec3(-0.0535714,-0.142857,-0.107143),
// vec3(-0.125,-0.142857,-0.0178571),
// vec3(0.015625,-0.160714,0.0297607),
// vec3(0.00669643,-0.160714,0.0230643),
// vec3(-0.00781071,-0.160714,0.0208321),
// vec3(-0.015625,-0.160714,0.0297607),
// vec3(0.015625,-0.25,0.0446429),
// vec3(0.00669643,-0.25,0.0379464),
// vec3(-0.00781071,-0.25,0.0357143),
// vec3(-0.015625,-0.25,0.0446429),
// vec3(-0.125,0.0,-0.0178571),
// vec3(-0.142857,0.0,0.00446429),
// vec3(-0.122768,0.0,0.0),
// vec3(-0.107143,0.0,-0.0178571),
// vec3(-0.125,-0.142857,-0.0178571),
// vec3(-0.142857,-0.142857,0.00446429),
// vec3(-0.122768,-0.142857,0.0),
// vec3(-0.107143,-0.142857,-0.0178571),
// vec3(-0.015625,-0.160714,0.0297607),
// vec3(-0.0175786,-0.160714,0.0319929),
// vec3(-0.0153464,-0.160714,0.0386893),
// vec3(-0.0133929,-0.160714,0.0386893),
// vec3(-0.015625,-0.25,0.0446429),
// vec3(-0.0175786,-0.25,0.046875),
// vec3(-0.0153464,-0.25,0.0535714),
// vec3(-0.0133929,-0.25,0.0535714),
// vec3(-0.0133929,-0.25,0.0535714),
// vec3(-0.00557857,-0.25,0.0535714),
// vec3(0.00557857,-0.25,0.0535714),
// vec3(0.0133929,-0.25,0.0535714),
// vec3(-0.0133929,-0.46425,0.0892857),
// vec3(-0.00557857,-0.46425,0.0892857),
// vec3(0.00557857,-0.46425,0.0892857),
// vec3(0.0133929,-0.46425,0.0892857),
// vec3(-0.0446429,-0.678571,0.0535714),
// vec3(-0.00892857,-0.678571,0.0625),
// vec3(0.00892857,-0.678571,0.0625),
// vec3(0.0446429,-0.678571,0.0535714),
// vec3(-0.0446429,-0.857143,0.0357143),
// vec3(-0.00892857,-0.857143,0.0446429),
// vec3(0.00892857,-0.857143,0.0446429),
// vec3(0.0446429,-0.857143,0.0357143),
// vec3(0.0133929,-0.25,0.0535714),
// vec3(0.0153464,-0.25,0.0535714),
// vec3(0.0178571,-0.25,0.0463179),
// vec3(0.015625,-0.25,0.0446429),
// vec3(0.0133929,-0.46425,0.0892857),
// vec3(0.0153464,-0.464286,0.0892857),
// vec3(0.0178571,-0.46425,0.0820321),
// vec3(0.015625,-0.46425,0.0803571),
// vec3(0.0446429,-0.678571,0.0535714),
// vec3(0.0535714,-0.678571,0.0513393),
// vec3(0.0535714,-0.678571,0.0334821),
// vec3(0.0446429,-0.678571,0.0357143),
// vec3(0.0446429,-0.857143,0.0357143),
// vec3(0.0535714,-0.857143,0.0334821),
// vec3(0.0535714,-0.857143,0.015625),
// vec3(0.0446429,-0.857143,0.0178571),
// vec3(0.015625,-0.25,0.0446429),
// vec3(0.00669643,-0.25,0.0379464),
// vec3(-0.00781071,-0.25,0.0357143),
// vec3(-0.015625,-0.25,0.0446429),
// vec3(0.015625,-0.46425,0.0803571),
// vec3(0.00669643,-0.464286,0.0736607),
// vec3(-0.00781071,-0.46425,0.0714286),
// vec3(-0.015625,-0.46425,0.0803571),
// vec3(0.0446429,-0.678571,0.0357143),
// vec3(0.00892857,-0.678571,0.0446429),
// vec3(-0.00892857,-0.678571,0.0446429),
// vec3(-0.0446429,-0.678571,0.0357143),
// vec3(0.0446429,-0.857143,0.0178571),
// vec3(0.00892857,-0.857143,0.0267857),
// vec3(-0.00892857,-0.857143,0.0267857),
// vec3(-0.0446429,-0.857143,0.0178571),
// vec3(-0.015625,-0.25,0.0446429),
// vec3(-0.0175786,-0.25,0.046875),
// vec3(-0.0153464,-0.25,0.0535714),
// vec3(-0.0133929,-0.25,0.0535714),
// vec3(-0.015625,-0.46425,0.0803571),
// vec3(-0.0175786,-0.464286,0.0825893),
// vec3(-0.0153464,-0.464286,0.0892857),
// vec3(-0.0133929,-0.46425,0.0892857),
// vec3(-0.0446429,-0.678571,0.0357143),
// vec3(-0.0535714,-0.678571,0.0334821),
// vec3(-0.0535714,-0.678571,0.0513393),
// vec3(-0.0446429,-0.678571,0.0535714),
// vec3(-0.0446429,-0.857143,0.0178571),
// vec3(-0.0535714,-0.857143,0.015625),
// vec3(-0.0535714,-0.857143,0.0334821),
// vec3(-0.0446429,-0.857143,0.0357143),
// vec3(-0.0446429,-0.857143,0.0357143),
// vec3(-0.00892857,-0.857143,0.0446429),
// vec3(0.00892857,-0.857143,0.0446429),
// vec3(0.0446429,-0.857143,0.0357143),
// vec3(-0.0446429,-0.928571,0.0285714),
// vec3(-0.00892857,-0.928571,0.0375),
// vec3(0.00892857,-0.928571,0.0375),
// vec3(0.0446429,-0.928571,0.0285714),
// vec3(-0.0539286,-0.999643,0.0178571),
// vec3(0.000357143,-0.999643,0.0178571),
// vec3(0.0,-0.999643,0.0178571),
// vec3(0.0535714,-0.999643,0.0178571),
// vec3(-0.000357143,-1,0.0178571),
// vec3(0.000357143,-1,0.0178571),
// vec3(0.0,-1,0.0178571),
// vec3(0.0,-1,0.0178571),
// vec3(0.0446429,-0.857143,0.0357143),
// vec3(0.0535714,-0.857143,0.0334821),
// vec3(0.0535714,-0.857143,0.015625),
// vec3(0.0446429,-0.857143,0.0178571),
// vec3(0.0446429,-0.928571,0.0285714),
// vec3(0.0535714,-0.928571,0.0263393),
// vec3(0.0535714,-0.928571,0.00848214),
// vec3(0.0446429,-0.928571,0.0107143),
// vec3(0.0535714,-0.999643,0.0178571),
// vec3(0.0669643,-0.999643,0.0178571),
// vec3(0.0673214,-0.999643,0.0),
// vec3(0.0539286,-0.999643,0.0),
// vec3(0.0,-1,0.0178571),
// vec3(0.0,-1,0.0178571),
// vec3(0.000357143,-1,0.0),
// vec3(0.000357143,-1,0.0),
// vec3(0.0446429,-0.857143,0.0178571),
// vec3(0.00892857,-0.857143,0.0267857),
// vec3(-0.00892857,-0.857143,0.0267857),
// vec3(-0.0446429,-0.857143,0.0178571),
// vec3(0.0446429,-0.928571,0.0107143),
// vec3(0.00892857,-0.928571,0.0196429),
// vec3(-0.00892857,-0.928571,0.0196429),
// vec3(-0.0446429,-0.928571,0.0107143),
// vec3(0.0539286,-0.999643,0.0),
// vec3(0.000357143,-0.999643,0.0),
// vec3(-0.000357143,-0.999643,0.0),
// vec3(-0.0539286,-0.999643,0.0),
// vec3(0.000357143,-1,0.0),
// vec3(0.000357143,-1,0.0),
// vec3(-0.000357143,-1,0.0),
// vec3(-0.000357143,-1,0.0),
// vec3(-0.0446429,-0.857143,0.0178571),
// vec3(-0.0535714,-0.857143,0.015625),
// vec3(-0.0535714,-0.857143,0.0334821),
// vec3(-0.0446429,-0.857143,0.0357143),
// vec3(-0.0446429,-0.928571,0.0107143),
// vec3(-0.0535714,-0.928571,0.00848214),
// vec3(-0.0535714,-0.928571,0.0263393),
// vec3(-0.0446429,-0.928571,0.0285714),
// vec3(-0.0539286,-0.999643,0.0),
// vec3(-0.0673214,-0.999643,0.0),
// vec3(-0.0675,-0.999643,0.0178571),
// vec3(-0.0539286,-0.999643,0.0178571),
// vec3(-0.000357143,-1,0.0),
// vec3(-0.000357143,-1,0.0),
// vec3(-0.000535714,-1,0.0178571),
// vec3(-0.000357143,-1,0.0178571) ];
