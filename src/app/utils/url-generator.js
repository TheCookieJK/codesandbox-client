export const sandboxUrl = sandbox => (
  sandbox.author ? `/${sandbox.author}/${sandbox.slug}/module`
  : `/anonymous/${sandbox.slug}`
);


export const editModuleUrl = sandbox => (
  `${sandboxUrl(sandbox)}/module`
);

export const forkSandboxUrl = sandbox => (
  `${sandboxUrl(sandbox)}/fork`
);