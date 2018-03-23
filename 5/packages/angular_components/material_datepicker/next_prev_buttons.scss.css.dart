library asset_angular_components_lib_material_datepicker_next_prev_buttons.scss.css.dart;


const List<dynamic> styles = const [':host {\n  height: 24px;\n  white-space: nowrap;\n}\n\n.next, .prev {\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  display: inline-block;\n  height: 24px;\n  opacity: 0.54;\n  padding: 0;\n  transition: opacity 130ms cubic-bezier(0.4, 0, 0.2, 1);\n  width: 24px;\n}\n\n.disabled.next, .disabled.prev {\n  opacity: 0.26;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n\n.next:hover:not(.disabled), .prev:hover:not(.disabled),\n.next:focus:not(.disabled),\n.prev:focus:not(.disabled) {\n  opacity: 0.87;\n}\n\n.next glyph, .prev glyph {\n  color: inherit;\n}\n\n.prev {\n  margin-right: 8px;\n}\n'];
