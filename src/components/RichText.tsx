import React from 'react';
import { Field, RichText as JssRichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { getSitecoreItem } from 'src/services/itemresolver';


interface Fields {
  Text: Field<string>;
}

export type RichTextProps = {
  params: { [key: string]: string };
  fields: Fields;
  rendering : rendering;
};

export const Default = (props: RichTextProps): JSX.Element => {
  const text = props.fields ? (
    <JssRichText field={props.fields.Text} />
  ) : (
    <span className="is-empty-hint">Rich text</span>
  );
  const id = props.rendering.uid;

  
  const styles = props.params.Styles;
  var textColor = "";
  const itempath = "/sitecore/content/SH 2023/SH 2023/Presentation/Styles/Rendering Theme Color/" +styles+"/primary-color"
  const fieldName = "Value"

  const textColor1 = getSitecoreItem(itempath, fieldName)();


  getSitecoreItem(itempath, fieldName)().then(function(response){
      textColor = response.field.value;
      
      return (
        <div className={`component rich-text ${props.params.styles.trimEnd()}`}
          id={id ? id : undefined}
          attr-rencoltheme-target={id ? id : undefined}
          style={{color:textColor}}
          >
          <div className="component-content">{text}</div>
        </div>
      );
  });

  // return (
  //   <div className={`component rich-text ${props.params.styles.trimEnd()}`}
  //     id={id ? id : undefined}
  //     attr-rencoltheme-target={id ? id : undefined}
  //     style={{color:textColor}}
  //     >
  //     <div className="component-content">{text}</div>
  //   </div>
  // );

  
};


