import { Field, withDatasourceCheck, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { useEffect, useState } from 'react';
import { resetEditorChromes } from '@sitecore-jss/sitecore-jss-nextjs/utils';

type TabsProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
  tabs: [0, 1];
};

const MyTabs = (props: TabsProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    resetEditorChromes();
    console.log('hi from handle click tab: ' + index);
  };

  useEffect(() => {
    resetEditorChromes();
    console.log('hi from use effect');
  }, [activeTab]);

  return (
    <div>
      <div className="tab-buttons">
        {[0, 1].map((tab, index) => (
          <button
            key={index}
            data-tab={tab}
            className={index === activeTab ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {index}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {activeTab == 0 && <Placeholder name="tab-container-1" rendering={props?.rendering} />}
        {activeTab == 1 && <Placeholder name="tab-container-2" rendering={props?.rendering} />}
      </div>
    </div>
  );
};

export default withDatasourceCheck()<TabsProps>(MyTabs);
