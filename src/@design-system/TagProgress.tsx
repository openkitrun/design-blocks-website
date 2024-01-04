import cls from '@/utils/cls';

export type TagTypes = 'wip' | 'beta' | 'deprecated' | 'new' | 'experimental' | 'stable' | 'planned';

const tagTypes: {
  [key in TagTypes]: {
    classNmae: string;
    label: string;
  };
} = {
  wip: {
    classNmae: 'border-yellow-400 bg-yellow-500/10 text-yellow-300',
    label: 'WIP',
  },
  beta: {
    classNmae: 'border-blue-400 bg-blue-500/10 text-blue-300',
    label: 'Beta',
  },
  deprecated: {
    classNmae: 'border-red-400 bg-red-500/10 text-red-300',
    label: 'Deprecated',
  },
  new: {
    classNmae: 'border-green-400 bg-green-500/10 text-green-300',
    label: 'New',
  },
  experimental: {
    classNmae: 'border-red-400 bg-red-500/10 text-red-300',
    label: 'Experimental',
  },
  stable: {
    classNmae: 'border-green-400 bg-green-500/10 text-green-300',
    label: 'Stable',
  },
  planned: {
    classNmae: 'border-gray-400 bg-gray-500/10 text-gray-300',
    label: 'Planned',
  },
};

type TagProps = {
  type?: TagTypes;
};

export function TagProgress(props: TagProps) {
  const { type = 'beta' } = props;
  return (
    <span className={cls('rounded-sm border px-2 py-0 text-[8.5px] no-underline', tagTypes[type].classNmae)}>
      {tagTypes[type].label}
    </span>
  );
}
