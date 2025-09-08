import { FC, useEffect, useMemo, useState } from "react";
import { Transition, TransitionProps } from "./Transition";
import { useChild, useNode, useTime } from "./hooks";
import { clear, getNode } from "./utils";
import { CSSTransition } from "./CssTransition";

type SwitchTransitionProps = Omit<TransitionProps, "data"> & {
  show: boolean;
  inTurn?: boolean;
};

export const SwitchTransition: FC<SwitchTransitionProps> = (props) => {
  if (props.inTurn) return <SwitchTransitionInturn {...props} />;
  return <SwitchTransitionTogether {...props} />;
};

const SwitchTransitionInturn: FC<SwitchTransitionProps> = (props) => {
  const { show, children } = props;
  const itemShow = useNode(children[0]);
  const itemHide = useNode(children[1]);

  const transitonProps: TransitionProps = {
    ...props,
    data: show,
    // appear
    onAppear() {
      const node = show ? getNode(itemShow) : getNode(itemHide);
      clear(node);
      node?.classList.add("appear");
    },
    onAppearActive() {
      const node = show ? getNode(itemShow) : getNode(itemHide);
      node?.classList.add("appear-active");
    },
    onAppearDone() {
      const node = show ? getNode(itemShow) : getNode(itemHide);
      clear(node);
      node?.classList.add("appear-done");
    },
    // exit
    onExit() {
      const node = show ? getNode(itemHide) : getNode(itemShow);
      clear(node);
      node?.classList.add("exit");
    },
    onExitActive() {
      const node = show ? getNode(itemHide) : getNode(itemShow);
      node?.classList.add("exit-active");
    },
    onExitDone() {
      const node = show ? getNode(itemHide) : getNode(itemShow);
      clear(node);
      node?.classList.add("exit-done");
    },
    // enter
    onEnter() {
      const node = show ? getNode(itemShow) : getNode(itemHide);
      console.log(node, 111111111);
      clear(node);
      node?.classList.add("enter");
    },
    onEnterActive() {
      const node = show ? getNode(itemShow) : getNode(itemHide);
      node?.classList.add("enter-active");
    },
    onEnterDone() {
      const node = show ? getNode(itemShow) : getNode(itemHide);
      clear(node);
      node?.classList.add("enter-done");
    },
    onMounted(runTasks) {
      runTasks("appear");
    },
    async onHide(runTasks) {
      await runTasks("exit");
    },
    async onShow(runTasks) {
      await runTasks("enter");
    },
  };

  return (
    <Transition {...transitonProps}>
      {(show: boolean) => (show ? itemShow : itemHide)}
    </Transition>
  );
};

const SwitchTransitionTogether: FC<SwitchTransitionProps> = (props) => {
  const { show, duration, appear, children } = props;
  const itemShow = useNode(children[0]);
  const itemHide = useNode(children[1]);

  return (
    <>
      <CSSTransition show={show} duration={duration} appear={appear}>
        {itemShow}
      </CSSTransition>

      <CSSTransition show={!show} duration={duration} appear={appear}>
        {itemHide}
      </CSSTransition>
    </>
  );
};
