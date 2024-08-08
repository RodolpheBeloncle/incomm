export const resetAttributes = (settings) => {
  const newAttributes = {};
  const attributes = settings.attributes;
  Object.keys(attributes).map((key) => {
    if (attributes[key].default !== undefined) newAttributes[key] = attributes[key].default;
  });
  return newAttributes;
}