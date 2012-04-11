/*
 * Emscripten helper interface
 *
 * This provides support for using lightgl.js to provide some OpenGL 1.0
 * functionality in Emscripten.
 */

GL.createEmscriptenContext = function() {
  addMatrixStack();
};

