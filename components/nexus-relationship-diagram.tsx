const entities = ["Aegis", "Veyra", "Planned Entities"] as const;

export function NexusRelationshipDiagram() {
  return (
    <ol className="relationship-diagram" aria-label="Nexus system hierarchy">
      <li className="relationship-root">
        <span>Nexus Initiative</span>
        <ol>
          <li className="relationship-core">
            <span>Nexus Core</span>
            <ul className="relationship-branches">
              {entities.map((entity) => (
                <li key={entity}>
                  <span>{entity}</span>
                </li>
              ))}
            </ul>
          </li>
        </ol>
      </li>
    </ol>
  );
}
